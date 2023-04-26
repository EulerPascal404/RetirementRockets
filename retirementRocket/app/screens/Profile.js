import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import {signOut} from 'firebase/auth'
import {auth,db} from '../config/firebase'
import colors from '../config/colors';
import { collection, addDoc } from "firebase/firestore";
export default function Profile({ navigation }) {
    const [value, setValue] = React.useState({
      age: useState(21),
      salary: useState(100000),
      savingsPercent: useState(10),
      assetValue: useState(0),
      meanInflationRate: useState(3.8),
      stdDevInflationRate:useState(56),
      meanInterestRate: useState(7.03),
      stdDevInterestRate:useState(10),
      meanRaiseRate: useState(7.08),
      stdDevRaiseRate:useState(1.8),
      meanTaxRate: useState(09.4),
      stdDevTaxRate:useState(10),
      //21,
    })
    const addUser= async() => {
      // creates a collection with the authenticated user's email as the UID
      try {
        const docRef = await addDoc(collection(db, user.email), {
          name: userName,
          password: password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return(

        <View style = {styles.container}>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 176}, {marginTop: 20}]}> Age: </Text>
              <TextInput
                style={{height: 20, width: 100, paddingLeft: 78, fontSize: 18}}
                keyboardType='decimal-pad'
                onChangeText={(text) => setValue({ ...value, age: text })}
                defaultValue = {"21"}

              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 42}, {marginTop: 10}]}> Salary: </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 194, fontSize: 18}}
                onChangeText={(text) => setValue({ ...value, salary: text })}
                defaultValue = {"$60000"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 72}, {marginTop: 10}]}> Savings %: </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 200, fontSize: 18}}
                onChangeText={(text) => setValue({ ...value, savingsPercent: text })}
                defaultValue = {"5%"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 252}, {marginTop: 10}]}> Assets: </Text>
              
          </View>
          <View style = {styles.centerContainer}>
            <View style = {styles.specialSeparator}>
            </View>
          </View>
          
          <View style = {styles.lightGrayBox}>
            <Text style={[styles.gray, {paddingTop: 3}]}> Advanced Settings </Text>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 92}, {marginTop: 10}]}> Inflation Rate </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 180, fontSize: 18}}
                onChangeText={(text) => setValue({ ...value, age: text })}
                defaultValue = {"5%"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 90}, {marginTop: 10}]}> Interest Rate </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 184, fontSize: 18}}
                defaultValue = {"5%"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 73}, {marginTop: 10}]}> Raise Rate </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 201, fontSize: 18}}
                defaultValue = {"5%"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style = {styles.row}>
            <Text style={[styles.text, {paddingLeft: 58}, {marginTop: 10}]}> Tax Rate </Text>
              <TextInput
                style={{height: 20, width: 300, paddingLeft: 216, fontSize: 18}}
                defaultValue = {"5%"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

          <View style={styles.centerContainer}> 
            <MyButton 
              title='Sign Out'
              onPress={() => signOut(auth)}
              backColor={colors.purple}
            />
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