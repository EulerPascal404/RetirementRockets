import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

import MyButton from '../components/MyButton';
import colors from '../config/colors';
import ProfileSeparator from '../components/ProfileSeparator';

export default function Profile({ navigation }) {

    return(
        <View style = {styles.container}>
          <View style = {styles.row}>
            <Text style={[styles.text, {paddingRight: 176}, {marginTop: 20}]}> Age: </Text>
              <TextInput
                style={{height: 20, width: 100, paddingLeft: 78, fontSize: 18}}
                defaultValue = {"21"}
              />
          </View>
          <View style = {styles.centerContainer}>
            <ProfileSeparator/>
          </View>

        </View>
    )



}

const styles = StyleSheet.create({
    container: {
      width: "100%",
    },

      text: {
        color: 'black',
        fontSize: 18,
    },

      row: {
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'center',
        width: "100%"
    },
  
    centerContainer: {
      width: "100%",
      alignItems: 'center'
    },
  });