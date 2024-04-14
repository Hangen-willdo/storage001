import React from 'react';
import { Text, StyleSheet } from 'react-native';
 
const App = () => {
  return (
    <Text style={styles.textStyle}>Hello, React Native!</Text>
  );
};
 
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#000000',
  },
});
 
export default App;