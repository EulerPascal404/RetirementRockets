import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';



export default function Simulate({ navigation }) {
    return (
          <View style={styles.container}>
            <View style={styles.square} ></View>
            <View style={styles.square} ></View>
            <View style={styles.circle} ></View>
          </View>
      );
          
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7CA1B4',
      flex: 1,
      alignItems: 'flex-end', 
      justifyContent: 'center', 
      flexDirection: 'column',
      rowGap: 180,
      padding: 20,
      
    },
    
    square: {
      width: 170,
      height: 7,
      backgroundColor: 'black'
      
    },

    square1: {
      width: 85,
      height: 7,
      backgroundColor: 'black'
    },
    circle: {
      width: 170,
      height: 7,
      borderRadius: 150 / 2,
    }
  });