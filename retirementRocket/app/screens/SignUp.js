import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

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
      <Button 
        title="Have an account? Sign In"
        onPress={() => navigation.navigate('LogIn', { screen: 'LogIn' })}
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});