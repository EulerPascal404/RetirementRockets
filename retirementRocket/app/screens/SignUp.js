import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import Separator from '../components/Separator';
import colors from '../config/colors';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{"Sign Up"}</Text>
      <Text>{"Email"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Your email adress"
      />
      <Text>{"Password"}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter Password"
      />
      <Separator
        color = "colors.secondary"
      />
      <Text>{"I agree to the Terms of Services and Privacy Policy."}</Text>
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
    
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
});