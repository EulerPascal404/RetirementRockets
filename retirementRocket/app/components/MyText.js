import * as React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import colors from '../config/colors';

function MyText({onClick}) {
  return (
  <Pressable onPress={onClick}>
        <Text style={styles.clicky}>This is clickable text</Text>
      </Pressable>  );
}

const styles = StyleSheet.create({
  clicky:{
  
    color: colors.purple,
    fontSize:20,
  },
})

export default MyText;