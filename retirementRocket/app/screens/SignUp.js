import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import Separator from '../components/Separator';
import colors from '../config/colors';

export default function SignUp({ navigation }) {
  return (
    <View style = {styles.container}>
        <Text style={[styles.bold, {marginTop: 60}, {paddingLeft: 40}]}> Sign Up </Text>

        <View style={styles.leftContainer}>
          <Text style={[styles.purple, {marginTop: 20}, {paddingRight: 295}]}> Email </Text>
        </View>

      <View style={styles.leftContainer}>
        <TextInput
          style={{height: 40}}
          placeholder="Your email adress"
        />
        <Separator/>
      </View>
      
      <View style={styles.leftContainer}>
        <Text style={[styles.purple, {paddingRight: 270}]}> Password </Text>
      </View>

      <View style={styles.leftContainer}>
        <TextInput
          style={{height: 40}}
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

      <View style={[styles.centerContainer, {paddingTop: 30}]}>
        <MyButton
          title= "Continue"
          backColor={colors.purple}
          onPress={() => navigation.push("HomeDrawer")}
        />

        <MyButton 
          title="Have an account? Sign In"  
          backColor={colors.purple}
          onPress={() => navigation.push("LogIn")}
        />
      </View>
        
    </View>
      

    
  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  }
});