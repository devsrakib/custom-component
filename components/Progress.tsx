import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const CustomProgressBar = ({value}:any) => {
  return (
    <View style={styles.container}>
      <ProgressBar 
        style={styles.progressBar} 
        progress={Number(value)} 
        color={MD3Colors.error50} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5, // optional, to make it look smoother
    width: Dimensions.get('window').width *.8
  },
});

export default CustomProgressBar;
