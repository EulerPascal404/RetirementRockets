 import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
function MyButton({title, onPress, backColor,}) {
   return (
      <TouchableOpacity
         title = {title}
         onPress={onPress}
         style={[styles.rectangle, {backgroundColor: backColor}]}>
       <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>

   );
}

const styles = StyleSheet.create({
   rectangle: {
   height: 50,
   width: 300,
   alignItems: 'center',
   justifyContent: 'center',
   margin: 10,
   borderRadius: 10,
 },
 text: {
   fontWeight: 'bold',
   fontSize: 15,
   color: 'white',
 },
})
export default MyButton;
