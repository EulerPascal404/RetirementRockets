import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


function ProfileSeparator() {
  return (
     <View style={[styles.itemSeparator]}/>
  );
}
  const styles = StyleSheet.create({
    itemSeparator: {
    width: '80%',
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
  },
});

export default ProfileSeparator;