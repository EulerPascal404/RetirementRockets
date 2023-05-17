import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet,Button, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import {signOut} from 'firebase/auth'
import 'firebase/firestore';
import {getDocs, doc, updateDoc} from "firebase/firestore"; 

import {auth,db} from '../config/firebase'
import colors from '../config/colors';
//import database from '@react-native-firebase/database';

import { collection, addDoc } from "firebase/firestore";

 
export default function Profile({ navigation }) {
    const { user } = useAuthentication();
    let maindocID = 0;
    let nestdocID = 0;
    React.useEffect(() => {
      console.log(data);
    }, [data]);
    const [value, setValue] = React.useState({
      age: 21,
      salary: 60000,
      savingsPercent: 10,
      assetValue: 10,
      meanInflationRate: 3.8,
      stdDevInflationRate: 56,
      meanInterestRate: 5,
      stdDevInterestRate: 10,
      meanRaiseRate: 5,
      stdDevRaiseRate:1.8,
      meanTaxRate: 5,
      stdDevTaxRate: 10,
      //21,
    })
    const [data, setData] = React.useState([]);

    const datas ={
      age: value.age,
      salary: value.salary,
      savingsPercent: value.savingsPercent,
      assetValue: value.assetValue,
      meanInflationRate: value.meanInflationRate,
      stdDevInflationRate: value.stdDevInflationRate,
      meanInterestRate: value.meanInterestRate,
      stdDevInterestRate: value.stdDevInterestRate,
      meanRaiseRate: value.meanRaiseRate,
      stdDevRaiseRate: value.stdDevRaiseRate,
      meanTaxRate: value.meanTaxRate,
      stdDevTaxRate: value.stdDevTaxRate,        
    }
    const initialValues ={
      iage: 0,
      isalary:0 ,
      isavingsPercent:0 ,
      iassetValue: 0,
      imeanInflationRate: 0,
      istdDevInflationRate:0,
      imeanInterestRate:0,
      istdDevInterestRate:0,
      imeanRaiseRate:0,
      istdDevRaiseRate:0,
      imeanTaxRate:0,
      istdDevTaxRate:0,          
    }
    const handleSignOut = () => {
      auth.signOut()
      .then(() => {
        // Sign out successful
        console.log('User signed out successfully');
        navigation.push("LogIn");
      })
      .catch((error) => {
        // Handle sign out error
        console.error('Sign out error:', error);
      });
  };

    const sendDataToFirestore = async (datar) => {
      console.log(datar);
      
      // Wait for the getData() function to complete
      await getData();
    
      console.log(maindocID);
      console.log(nestdocID);
    
      // Check if the document IDs are not empty or undefined
      if (maindocID && nestdocID) {
        const parentDocRef = doc(db, 'users2', maindocID);
        const nestedCollectionRef = collection(parentDocRef, 'userData');
        const nestedDocRef = doc(nestedCollectionRef, nestdocID);
        await updateDoc(nestedDocRef, datar);
      } else {
        console.log('Document IDs are empty or undefined');
      }
    };
    
    const getData = async() =>{
      console.log(db);
      console.log(user.email);
      try {
        const querySnapshot = await getDocs(collection(db, 'users2'));
        fetchData(querySnapshot);
        

        //console.log(documents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const fetchData = async(querySnapshot) =>{
      for (const doc of querySnapshot.docs) {
        // for of loop iterating rhough query
        // this gets each document's individual data
        const docData = doc.data();
    
        // check that it is not null
        console.log('DocID:', doc.id);
        console.log('Doc data:', docData);
    
        console.log(docData.email === user.email);
        if (docData.email === user.email) {
          // Get a reference to the nested collection
          const nestedCollectionRef = collection(db, 'users2', doc.id, 'userData');
          maindocID= doc.id;
          // Query the nested collection for documents
          const querySnapshot2 = await getDocs(nestedCollectionRef);
          console.log(querySnapshot2);
          querySnapshot2.forEach((doc) => {
            const docIDl = doc.id;
            nestdocID= docIDl;
            console.log("Nested DOc ID: "+ nestdocID);
          });        
          const documents = querySnapshot2.docs.map((doc) => doc.data());
          console.log(documents);

          const numericalData = [];

          documents.forEach((item) => {
            // Assuming 'item' is an object with numerical and non-numerical properties
            const itemKeys = Object.keys(item);
            
            // Iterate over the keys in the order they appear in the object
            itemKeys.forEach((key) => {
              // Check if the value is a number
              if (typeof item[key] === 'number') {
                // Add the numerical value to the array
                numericalData.push(item[key]);
                
              }
            });
          });
        // Now the 'numericalData' array contains only the numerical values extracted from the Firestore data
        console.log(numericalData);
      //   iage: 0,
      // isalary:0 ,
      // isavingsPercent:0 ,
      // iassetValue: 0,
      // imeanInflationRate: 0,
      // istdDevInflationRate:0,
      // imeanInterestRate:0,
      // istdDevInterestRate:0,
      // imeanRaiseRate:0,
      // istdDevRaiseRate:0,
      // imeanTaxRate:0,
      // istdDevTaxRate:0, 
        initialValues.iage = numericalData[0];
        initialValues.isalary = numericalData[1];
        initialValues.isavingsPercent = numericalData[2];
        initialValues.iassetValue = numericalData[3];
        initialValues.imeanInflationRate = numericalData[4];
        initialValues.istdDevInflationRate = numericalData[5];
        initialValues.imeanInterestRate = numericalData[6];
        initialValues.istdDevInterestRate = numericalData[7];
        initialValues.imeanRaiseRate = numericalData[8];
        initialValues.istdDevRaiseRate = numericalData[9];
        initialValues.imeanTaxRate = numericalData[10];
        initialValues.istdDevTaxRate = numericalData[11];
        console.log(initialValues);
        }
      }
    }

    return(

        <View style = {styles.container}>

        
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, age: text })}
            keyboardType='decimal-pad'
            defaultValue="40"
            paddingLeft1={0}
            paddingRight={180}
            marginTop={20}
            width={100}
            paddingLeft2={75}
            label="Age"
            />

          
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, salary: text })}
            keyboardType='decimal-pad'
            defaultValue="120000"
            paddingLeft1={60}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={175}
            label="Salary($)"
            />


          <ProfileCard
            onChangeText={(text) => setValue({ ...value, savingsPercent: text })}
            keyboardType='decimal-pad'
            defaultValue="10"
            paddingLeft1={80}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={200}
            label="Savings(%)"
            />


          <ProfileCard
            onChangeText={(text) => setValue({ ...value, assetValue: text })}
            keyboardType='decimal-pad'
            defaultValue="100000"
            paddingLeft1={70}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={170}
            label="Assets($)"
            />
          <View style = {styles.centerContainer}>
            <View style = {styles.specialSeparator}>
            </View>
          </View>
          
          <View style = {styles.lightGrayBox}>
            <Text style={[styles.gray, {paddingTop: 3}]}> Advanced Settings </Text>
          </View>

          
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, meanInflationRate: text })}
            keyboardType='decimal-pad'
            defaultValue="3"
            paddingLeft1={125}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={160}
            label="Inflation Rate(%)"
            />

          
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, meanInterestRate: text })}
            keyboardType='decimal-pad'
            defaultValue="5"
            paddingLeft1={120}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={165}
            label="Interest Rate(%)"
            />

         
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, meanRaiseRate: text })}
            keyboardType='decimal-pad'
            defaultValue="4"
            paddingLeft1={100}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={183}
            label="Raise Rate(%)"
            />

          
          <ProfileCard
            onChangeText={(text) => setValue({ ...value, meanTaxRate: text })}
            keyboardType='decimal-pad'
            defaultValue="30"
            paddingLeft1={84}
            paddingRight={0}
            marginTop={10}
            width={300}
            paddingLeft2={190}
            label="Tax Rate(%)"
            />

          <View style={[styles.centerContainer, {marginTop: 20}]}> 
          <MyButton 
              title='Save Changes'
              onPress={() => sendDataToFirestore(datas)}
              backColor={colors.purple}
            />
            <MyButton 
              title='Sign Out'
              onPress={() => handleSignOut()}
              backColor={colors.purple}
            />

          </View>
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "white"
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
