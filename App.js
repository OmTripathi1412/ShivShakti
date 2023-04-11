/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ImageBackground
      style={{backgroundColor: 'red', flex: 1}}
      // source={require('')}
    >
      <View>
        <Text style={styles.text}>Appsss</Text>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
