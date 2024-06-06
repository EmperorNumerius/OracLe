import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function ResultsScreen({ route, navigation }) {
  const { result } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Results</Text>
      {result.parts.map((part, index) => (
        <View key={index} style={styles.partContainer}>
          <Image source={{ uri: part.img_url }} style={styles.image} />
          <Text style={styles.partText}>{part.name}</Text>
          <Text style={styles.partCategory}>{part.category}</Text>
          <Text style={styles.partScore}>Part Number: {part.partNum}</Text>
        </View>
      ))}
      <Button title="Take Another Picture" onPress={() => navigation.navigate('Camera')} color="#841584" />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} color="#841584" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, color: '#333' },
  partContainer: { alignItems: 'center', marginBottom: 20 },
  image: { width: 100, height: 100, marginBottom: 10 },
  partText: { fontSize: 18, color: '#333' },
  partCategory: { fontSize: 16, color: '#666' },
  partScore: { fontSize: 14, color: '#999' },
});
