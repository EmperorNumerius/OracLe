import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OracLe.go</Text>
      <Image source={{ uri: './assets/images/beauty.png' }} style={styles.logo} />
      <Button title="Take a Picture" onPress={() => navigation.navigate('Camera')} color="#841584" />
      <Button title="View History" onPress={() => navigation.navigate('History')} color="#841584" />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 32, marginBottom: 20, color: '#333' },
  logo: { width: 100, height: 100, marginBottom: 20 },
});
