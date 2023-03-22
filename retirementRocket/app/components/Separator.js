import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


function Separator() {
  return (
     <View style={[styles.itemSeparator]}/>
  );
}
  const styles = StyleSheet.create({
    itemSeparator: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginBottom: 10,
  },
});

export default Separator;