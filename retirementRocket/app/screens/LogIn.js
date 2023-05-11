import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, TextInput, CommonActions, NavigationContainer, ToastAndroid, Alert } from 'react-native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';
import Separator from '../components/Separator';
import MyTextButton from '../components/MyTextButton';
import '../config/firebase';
import {auth} from '../config/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//const auth = getAuth();

export default function LogIn({ navigation }) {

  num = () => 1;

  showAlert = () => {
    Alert.alert(
      "Popup Title",
      "This is a pop-up message!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };





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
      Alert.alert(
        "No Email/Password Entered!",
        "Please enter your log-in information or click 'sign-up' to get started!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigation.push("HomeDrawer");
    
      
    } catch (error) {
      num = () => 2;
      
      setValue({
        ...value,
        error: error.message,
        
      })

      if(num = () => 2){
      
        Alert.alert(
          "Wrong Information Entered!",
          "Please enter your log-in information or click 'sign-up' to get started!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
        
      }else{
        num = () => 1;
      }
      
      



    }
    

  }

  let getEmployees = () => {
    console.log("point 1")
    fetch("http://10.20.16.65:5000/employees")
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        showAlert;
        console.log(error);
        
      }
    )
  };

  
  return (
    <View style={styles.container}>
       <View style={styles.centerContainer}> 
        <Image
          style={[styles.imageStyles, {height: 150}, {width: 250}, {marginTop: 60}]}
          source={require('../assets/logo.png')}
        />
        </View>
      <Text style={[styles.bold, {marginTop: 30}, {paddingLeft: 40}]}> Sign In </Text>
      <Text style={[styles.gray, {paddingLeft: 42}, {paddingTop: 10}]}> Hi there! Nice to see you again. </Text>

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
              //onPress={() => ToastAndroid.show("TestTestTest")}
                onPress={showAlert}
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