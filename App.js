import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../node_modules/react-spritz/build/main.css';
import ReactSpritz from 'react-spritz';


export default function App() {
    function refreshPage() {
        window.location.reload(false);
    }
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
        <button onClick={refreshPage}>Click to reload!</button>

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
