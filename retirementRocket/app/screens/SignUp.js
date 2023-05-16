import React from 'react';
import { Text, TextInput, StyleSheet, useState, View } from 'react-native';


import MyButton from '../components/MyButton';
import Separator from '../components/Separator';
import colors from '../config/colors';
import MyTextButton from '../components/MyTextButton';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import '../config/firebase';
import {auth,db} from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";



//const auth = getAuth();
export default function SignUp({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })
  const data = {
    email: value.email, 
    pswd: value.password,
  }
  const datas ={
    age: 40,
    salary: 120000,
    savingsPercent: 10,
    assetValue: 100000,
    meanInflationRate: 3,
    stdDevInflationRate: 0.5,
    meanInterestRate: 5,
    stdDevInterestRate: 10,
    meanRaiseRate: 4,
    stdDevRaiseRate: 1,
    meanTaxRate: 30,
    stdDevTaxRate: 25,
              
  }
  async function signUp() {
    if (!isChecked || value.email === '' || value.password === '') {
      console.log("blah")
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      try {
        console.log(db);
        const docRef = await addDoc(collection(db, 'users2'), data );
    
        console.log('Document written with ID: ', docRef.id);
        const subcollectionRef = collection(collection(db, 'users2'), docRef.id, 'userData');
        const subDocRef = await addDoc(subcollectionRef, datas );
        console.log('Document written with ID: ', subDocRef.id);

      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
      navigation.push("HomeDrawer");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }
  


  const [isChecked, setIsChecked] = React.useState(false);

  

  return (
    <View style = {styles.container}>
      <Text style={[styles.bold, {marginTop: 100}, {paddingLeft: 40}]}> Sign Up </Text>

      <View style={styles.leftContainer}>
        <Text style={[styles.purple, {marginTop: 20}, {paddingRight: 295}]}> Email </Text>

        <TextInput
            style={{height: 40}}
            placeholder="Your email adress"
            autoCapitalize="none"
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

      <View style={[styles.checkboxContainer, {paddingTop: 15}]}>
        <BouncyCheckbox
          size={25}
          fillColor= "#6334e3"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#6334e3" }}
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />


        <Text>I agree to the
          <Text style={styles.purple}> Terms of Services </Text>
          <Text> and </Text>
        </Text>
      </View>

      <View style={[styles.leftContainer, {paddingLeft: 98}]}>
        <Text style={styles.purple}> Privacy Policy. </Text>
      </View>

      <View style={[styles.centerContainer, {paddingTop: 15}]}>
        <MyButton
          title= "Continue"
          backColor={colors.purple}
          onPress={signUp}
          disabled={!isChecked}
        />

      <View style = {[styles.textbuttons]}>
        <Text style={[styles.gray, {fontSize: 14}, {paddingRight: 10}]}> Have an account? </Text>
            
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
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 60,
  }
});
