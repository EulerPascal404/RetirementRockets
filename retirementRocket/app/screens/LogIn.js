import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, CommonActions,NavigationContainer } from 'react-native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';
import Separator from '../components/Separator';
import MyTextButton from '../components/MyTextButton';
export default function LogIn({ navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}> 
        <Text style={[styles.gray, {paddingTop: 150}]}> El Primo Finance </Text>
      </View>

      <View style={styles.leftContainer}> 
        <Text style={[styles.bold, {marginTop: 30}, {paddingLeft: 40}]}> Sign In </Text>
        <Text style={[styles.gray, {paddingLeft: 42}, {paddingTop: 10}]}> Hi there! Nice to see you again </Text>
      </View>

      <View style={[styles.container, {paddingLeft: 35}]}>
        <View style={styles.leftContainer}>
            <Text style={[styles.purple, {marginTop: 20}, {paddingLeft: 7}]}> Email </Text>
        </View>

        <View style={[styles.leftContainer, {paddingLeft: 31}]}>
          <TextInput
            style={{height: 40}}
            placeholder="example@gmail.com"
          />
          <Separator/>
        </View>
        
        <View style={styles.leftContainer}>
          <Text style={[styles.purple, {paddingLeft: 8}, {paddingTop: 10}]}> Password </Text>
        </View>

        <View style= {[styles.leftContainer, {paddingLeft: 31}]}>
          <TextInput
            style={{height: 40}}
          />
          <Separator/>
        </View>
      </View>
      

      <View style={styles.centerContainer}> 
        <MyButton 
          title='Sign In'
          onPress={() => navigation.push("HomeDrawer")}
          backColor={colors.purple}

        />
        
      </View>
      
      <View style={[styles.textbuttons]}>
        <Text style={[styles.gray, {fontSize: 14}]}> Forgot Password? </Text>

        <MyTextButton 
            text = 'Sign Up'  
            onPress={() => navigation.push("SignUp")}
        /> 
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  leftContainer: {
    paddingLeft: 20,
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