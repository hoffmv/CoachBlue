import * as SQLite from 'expo-sqlite';
import { seedExercises } from '../data/exercises';

const DB_NAME = 'coachblue.db';

/** Async DB handle (Hermes + JSC, Expo SDK 53) */
export const dbPromise = SQLite.openDatabaseAsync(DB_NAME);

/** Create tables (runs once at launch) */
export async function initDb(): Promise<void> {
  const db = await dbPromise;

  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      primary_muscle TEXT,
      video_url TEXT
    );
  `);
}

/** Insert default rows on first run (no-op if rows already exist) */
export async function seedExercisesIfNeeded(): Promise<void> {
  const db = await dbPromise;

  const row = await db.getFirstAsync<{ count: number }>(
    'SELECT COUNT(*) AS count FROM exercises'
  );
  const count = row?.count ?? 0;

  if (count === 0) {
    // insert each seed row with runAsync (supports params in typings)
    await Promise.all(
      seedExercises.map(e =>
        db.runAsync(
          'INSERT INTO exercises (name, primary_muscle, video_url) VALUES (?, ?, ?)',
          [e.name, e.primary_muscle, e.video_url ?? null]
        )
      )
    );
    console.log('Seeded exercises table with default rows');
  }
}
