import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function MyTextInput({text, changeState, hide}) {
  return (
     <TextInput
      placeholder={text}
      style={styles.textInput}
      onChangeText ={text => changeState(text)}
      secureTextEntry= {hide}
      />
  );
}

const styles = StyleSheet.create({
  textInput:{
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    placeholderTextColor: 'gray',
  }
})

export default MyTextInput;