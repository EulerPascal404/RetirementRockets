import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import Separator from '../components/Separator';
import colors from '../config/colors';
import MyTextButton from '../components/MyTextButton';
import '../config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth();
export default function SignUp({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })
  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.push("HomeDrawer");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }
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
    <View style = {styles.container}>
        <Text style={[styles.bold, {marginTop: 100}, {paddingLeft: 40}]}> Sign Up </Text>

        <View style={styles.leftContainer}>
          <Text style={[styles.purple, {marginTop: 20}, {paddingRight: 295}]}> Email </Text>

          <TextInput
            style={{height: 40}}
            placeholder="Your email adress"
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

      <View style={[styles.centerContainer, {paddingTop: 15}]}>
        <Text>I agree to the
          <Text style={styles.purple}> Terms of Services 
          </Text>
          <Text> and </Text>
          <Text style={styles.purple}>Privacy Policy. 
          </Text>
        </Text>
      </View>

      <View style={[styles.centerContainer, {paddingTop: 15}]}>
        <MyButton
          title= "Continue"
          backColor={colors.purple}
          onPress={signUp}
        />

        <View style = {[styles.textbuttons]}>
          <Text style={[styles.gray, {fontSize: 14}]}> Have an account? </Text>
            
            <MyTextButton 
                text = 'Sign In'  
                onPress={() => navigation.push("LogIn")}
                />
        </View>
      </View>
      
    </View>
      
  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white'
  },

  leftContainer: {
    paddingLeft: 60,
    width: "100%",
    backgroundColor: 'white'
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
      fontSize: 14,
  },

  textbuttons: {
    flexDirection: 'row' ,
    alignItems: 'center'
  }
});
