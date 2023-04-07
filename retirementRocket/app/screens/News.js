import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import colors from '../config/colors';


export default function News({ navigation }) {

    return(
        <View style = {styles.container}>
            
          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 282}, {marginTop: 20}]}> Title </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 282}, {marginTop: 20}]}> Title </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 282}, {marginTop: 20}]}> Title </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 282}, {marginTop: 20}]}> Title </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 282}, {marginTop: 20}]}> Title </Text>
          </View>
          <View style = {styles.centerContainer}>
            <View style = {styles.specialSeparator}>
            </View>
          </View>
          
          <View style = {styles.lightGrayBox}>
            <Text style={[styles.gray, {paddingTop: 3}]}> Your Authors </Text>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 256}, {marginTop: 20}]}> Author </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 256}, {marginTop: 20}]}> Author </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 256}, {marginTop: 20}]}> Author </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 256}, {marginTop: 20}]}> Author </Text>
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

        </View>
    )



}

const styles = StyleSheet.create({
    container: {
      width: "100%",
    },

    text: {
      color: 'black',
      fontSize: 18,
    },

    row: {
      flexDirection: 'row',
      alignItems: 'space-between',
      justifyContent: 'center',
      width: "100%"
    },
  
    centerContainer: {
      width: "100%",
      alignItems: 'center'
    },

    specialSeparator: {
      width: '100%',
      height: 1,
      backgroundColor: 'gray',
      marginTop: 10,
    },

    gray: {
      color: '#808080',
      fontSize: 16,
    },

    lightGrayBox: {
      width: '100%',
      height: 30,
      backgroundColor: 'lightgray',
      alignItems: 'center'
    }
  });