import * as React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import colors from '../config/colors';

function MyTextButton({text, onPress}) {
  return (
  <Pressable onPress={onPress}>
        <Text style={styles.clicky}> {text} </Text>
  </Pressable>  );
}

const styles = StyleSheet.create({
  clicky:{
    color: colors.purple,
    fontSize: 14,
  },
})

export default MyTextButton;