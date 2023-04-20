import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, TextInput, CommonActions, NavigationContainer } from 'react-native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';
import Separator from '../components/Separator';
import MyTextButton from '../components/MyTextButton';
import '../config/firebase';
import {auth} from '../config/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//const auth = getAuth();

export default function LogIn({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })
  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigation.push("HomeDrawer");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
       <View style={styles.centerContainer}> 
        <Image
          style={[styles.imageStyles, {height: 150}, {width: 250}, {marginTop: 60}]}
          source={require('../assets/logo.png')}
        />
        </View>

      <Text style={[styles.bold, {marginTop: 30}, {paddingLeft: 40}]}> Sign In </Text>
      <Text style={[styles.gray, {paddingLeft: 40}, {paddingTop: 10}]}> Hi there! Nice to see you again </Text>

      <View style={styles.leftContainer}>
        <Text style={[styles.purple, {marginTop: 10}, {paddingRight: 295}]}> Email </Text>
        <TextInput
          style={{height: 40}}
          placeholder="example@gmail.com"
          onChangeText={(text) => setValue({ ...value, email: text })}
          />
        <Separator/>

        <Text style={[styles.purple, {paddingRight: 270}]}> Password </Text>

        <TextInput
          style={{height: 40}}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry= {true}
        />
        <Separator/>
      </View>

      <View style={styles.centerContainer}> 
        <MyButton 
          title='Sign In'
          onPress={signIn}
          backColor={colors.purple}
        />

        <View style={[styles.textbuttons]}>
          <Text style={[styles.gray, {fontSize: 14}, {paddingRight: 100}]}> Forgot Password? </Text>

          <MyTextButton 
              text = 'Sign Up'  
                onPress={() => navigation.push("SignUp")}
          /> 
        </View>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },

  leftContainer: {
    paddingLeft: 60,
    width: "100%",
  },

  centerContainer: {
      width: "100%",
      alignItems: 'center'
  },

    purple:{
      color: '#6334e3',
      fontSize: 14,
  },

    bold:{
      fontWeight: 'bold',
      fontSize: 20,
  },
    gray: {
      color: '#808080',
      fontSize: 16,
  },

    textbuttons: {
      flexDirection: 'row' ,
      alignItems: 'center'
    }
      
});