import { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { dbPromise } from '../lib/db';

type Row = { id: number; name: string; primary_muscle: string };

export default function ExerciseLibrary() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const load = async () => {
      const db = await dbPromise;
      const res = await db.getAllAsync<Row>('SELECT * FROM exercises ORDER BY name;');
      setRows(res);
    };
    load().catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.muscle}>{item.primary_muscle}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: '#fff' },
  card: { paddingHorizontal: 20, paddingVertical: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  muscle: { fontSize: 14, color: '#666' },
  sep: { height: 1, backgroundColor: '#eee', marginHorizontal: 20 }
});
