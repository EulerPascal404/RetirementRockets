import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import { NavigationContainer } 
         from '@react-navigation/native';
         
import LogIn from "./LogIn";
import SignUp from "./SignUp";
                 
const Drawer = createDrawerNavigator();       

export default function App() {
           return (
          
               <Drawer.Navigator >
                 <Drawer.Screen name="LogIn" component={LogIn} />
                 <Drawer.Screen name="SignUp" component={SignUp} />
               </Drawer.Navigator>
            
           );
         
           }