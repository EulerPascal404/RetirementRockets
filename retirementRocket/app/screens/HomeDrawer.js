import * as React from 'react';
import { Text, View, BackHandler } from 'react-native';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import { NavigationContainer } 
         from '@react-navigation/native';
         
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { getActiveChildNavigationOptions } from 'react-navigation';
import Simulate from './Simulate';
import News from './News';
import Profile from './Profile';
   
const Drawer = createDrawerNavigator();       

export default function App() {
  
  
           return (
          
               <Drawer.Navigator >
                 <Drawer.Screen name="Home" component={Home} />
                 <Drawer.Screen name="Simulate" component={Simulate} />
                 <Drawer.Screen name="News" component = {News} />
                 <Drawer.Screen name="Profile" component = {Profile} />

               </Drawer.Navigator>
            
           );
         
           }