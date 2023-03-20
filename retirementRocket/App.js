import 'react-native-gesture-handler';
import SignUp from './app/screens/SignUp';
import LogIn from './app/screens/LogIn';
import HomeDrawer from "./app/screens/HomeDrawer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="LogIn"
          component={LogIn}
          
        />
        
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen 
          name="HomeDrawer"
          component={HomeDrawer}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}