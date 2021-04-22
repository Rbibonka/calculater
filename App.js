import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import MainPanel from './MainPanel';
import Panel from './Joke';

export default function App() {
  return (
  <View style={styles.container}>
    <Panel />
    <MainPanel />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  }
});
