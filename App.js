import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [appTitleName] = useState("Meal Planner");
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Open up App.js to start working on your { appTitleName } app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  innerText: {
    color: 'white'
  }
});
