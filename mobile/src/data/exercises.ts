// src/data/exercises.ts
export interface ExerciseSeed {
  name: string;
  primary_muscle: string;
  video_url?: string;
}

export const seedExercises: ExerciseSeed[] = [
  { name: 'Push-Up',          primary_muscle: 'Chest',    video_url: 'https://youtu.be/IODxDxX7oi4' },
  { name: 'Goblet Squat',     primary_muscle: 'Quads',    video_url: 'https://youtu.be/MeIiIdhvXT4' },
  { name: 'Bent-Over Row',    primary_muscle: 'Back',     video_url: 'https://youtu.be/KL9A3FQKkRE' },
  { name: 'Overhead Press',   primary_muscle: 'Shoulders',video_url: 'https://youtu.be/2yjwXTZQDDI' },
  { name: 'Lat Pulldown',     primary_muscle: 'Back',     video_url: 'https://youtu.be/CAwf7n6Luuc' },
  { name: 'Romanian Deadlift',primary_muscle: 'Hamstrings',video_url:'https://youtu.be/2SHsk9AzdjA' },
  { name: 'Plank',            primary_muscle: 'Core',     video_url: 'https://youtu.be/B296mZDhrP4' },
  { name: 'Dumbbell Lunge',   primary_muscle: 'Glutes',   video_url: 'https://youtu.be/wrwwXE_x-pQ' },
  { name: 'Assisted Pull-Up', primary_muscle: 'Back',     video_url: 'https://youtu.be/QYYZk2aQ4Lw' },
  { name: 'Battle Ropes',     primary_muscle: 'Full Body' }
];
