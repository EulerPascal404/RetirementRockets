import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
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
      <MyButton 
        title="Have an account? Sign In"
        onPress={() => navigation.navigate('LogIn', { screen: 'LogIn' })}
        backColor={colors.purple}
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