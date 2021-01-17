import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../node_modules/react-spritz/build/main.css';
import ReactSpritz from 'react-spritz';


export default function App() {
  const test_string = "teststrin";
  return (
    <View style={styles.container}>
        <ReactSpritz
            text= "test_string test_string test string
            test_string test string test_string test string
            test_string test string test_string test string "
            wpm={400}
            playing={true}
            stop={true}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
