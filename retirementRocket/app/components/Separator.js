import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


function Separator({color}) {
  return (
     <View style={[styles.itemSeparator, {backgroundColor: color}]}/>
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