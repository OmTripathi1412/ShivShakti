/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 0.5}}>
      <View>
        <Text style={styles.text}>App</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
