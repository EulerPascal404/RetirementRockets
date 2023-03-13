import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function LogIn({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "french" ? "Bonjour" : "Hello";
  return (
    <View style={styles.container}>
      <Text>{"El Primo Finance"}</Text>
      <Text>{"Hi there! Nice to see you again"}</Text>
      <Text>{"Username"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter Username"
      />
      <Text>{"Password"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter Password"
      />
      <Button 
        title='Login'
        //onPress={() => navigation.navigate('Root', { screen: 'SignUp' })}
        onPress={() => navigation.push("Third")}
      />
      <Button 
        title='Sign Up'
        //onPress={() => navigation.navigate('Root', { screen: 'SignUp' })}
        onPress={() => navigation.push("SignUp")}
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