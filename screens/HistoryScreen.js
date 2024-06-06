import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockData = [
  { id: '1', title: 'Analysis on 2024-05-01', description: 'Brick 2 x 4, Brick 1 x 2' },
  { id: '2', title: 'Analysis on 2024-05-15', description: 'Plate 4 x 6, Plate 2 x 2' },
  { id: '3', title: 'Analysis on 2024-06-01', description: 'Tile 1 x 1, Tile 1 x 2' },
];

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching history data from an API or local storage
    setHistory(mockData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyTitle}>{item.title}</Text>
            <Text style={styles.historyDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  historyItem: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  historyDescription: {
    fontSize: 16,
    color: '#666',
  },
});
