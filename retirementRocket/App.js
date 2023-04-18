import 'react-native-gesture-handler';
import SignUp from './app/screens/SignUp';
import LogIn from './app/screens/LogIn';
import HomeDrawer from "./app/screens/HomeDrawer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BackHandler} from 'react-native';
import './app/config/firebase';
import RootNavigation from './navigation';
const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (
    
    <NavigationContainer>
       
      <Stack.Navigator>
        
        <Stack.Screen 
          name="LogIn"
          component={LogIn}
          options={{headerShown:false}}
        />
        
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="HomeDrawer"
          component={HomeDrawer}
          options={{headerShown:false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  
}