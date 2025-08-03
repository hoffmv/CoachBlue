import { useEffect } from 'react';
import { View, StatusBar } from 'react-native';

import { initDb, seedExercisesIfNeeded } from './src/lib/db';
import ExerciseLibrary from './src/screens/ExerciseLibrary';

export default function App() {
  // Initialize DB and seed on first mount
  useEffect(() => {
    initDb()
      .then(() => seedExercisesIfNeeded())
      .catch(err => console.warn('DB init failed', err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <ExerciseLibrary />
    </View>
  );
}
