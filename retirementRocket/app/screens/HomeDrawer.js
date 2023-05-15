import * as React from 'react';
import { Text, View, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { getActiveChildNavigationOptions } from 'react-navigation';

import Simulate from './Simulate';
import Profile from './Profile';
import News from './News';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Simulate') {
              iconName = focused ? 'bar-chart' : 'bar-chart';
            } else if (route.name === 'News') {
              iconName = focused ? 'article' : 'article';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Simulate" component={Simulate} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}
