import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';



export default function Simulate({ navigation }) {
    return (
          <View style={styles.container}>
            <View style={styles.square} ><Text>hi</Text></View>
            <View style={styles.square} ></View>
            <View style={styles.square} ></View>
          </View>
      );
          
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7CA1B4',
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row',
      columnGap: 40,
    },
    square: {
      width: 90,
      height: 90,
      backgroundColor: 'black'
    },
  });