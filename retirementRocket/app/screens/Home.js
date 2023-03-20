import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';

export default function Home({ navigation }) {

    return(
        <View> 
        <Text>{"Welcome User!"}</Text>
        <Text>{"Your savings"}</Text>
        <MyButton 
        title='See Savings'
        //onPress={() => navigation.push("HomeDrawer")}
        backColor={colors.purple}
      />
        </View>
    )





}