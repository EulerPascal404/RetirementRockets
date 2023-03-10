import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate('LogIn', { screen: 'LogIn' })}
        //onPress={() => navigation.navigate('LogIn')}
      />
      <Button 
        title="Navigate to second screen with english"
        onPress={() => navigation.push("LogIn")}      />
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