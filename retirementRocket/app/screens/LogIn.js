import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';

export default function LogIn({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{"El Primo Finance"}</Text>
      <Text>{"Hi there! Nice to see you again"}</Text>
      <Text>{"Email"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter Username"
      />
      <Text>{"Password"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter Password"
      />
      <MyButton 
        title='Login'
        //onPress={() => navigation.navigate('Root', { screen: 'SignUp' })}
        onPress={() => navigation.push("Home")}
        backColor={colors.purple}
      />
      <MyButton 
        title='Sign Up'
        //onPress={() => navigation.navigate('Root', { screen: 'SignUp' })}
        onPress={() => navigation.push("SignUp")}
        backColor={colors.purple}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
});