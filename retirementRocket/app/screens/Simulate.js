import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';



export default function Simulate({ navigation }) {
    return (
          <View style={styles.container}>

          <Text style={[{fontSize: 15, fontWeight: 'bold'}]}> Overview 
        </Text>

            <View style={[styles.circle,{marginTop: 0}]} ></View>

            <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop: 180}]}> Charts 
        </Text>

            <View style={[styles.circle]} ></View>

            <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop: 180}]}> News 
        </Text>

            <View style={[styles.circle1]} ></View>
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
      //rowGap: 180,
      padding: 20,
      
    },
    
    square: {
      width: 170,
      height: 7,
      backgroundColor: 'black'
      
    },

    circle1: {
      width: 130,
      height: 7,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    },
    circle: {
      height: 7,
      width: 170,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    }
  });