import * as React from 'react';
import {View, StyleSheet, style, Text, TextInput} from 'react-native';
import ProfileSeparator from './ProfileSeparator';
import colors from '../config/colors';

function ProfileCard({ onChangeText, keyboardType, defaultValue, paddingLeft1, marginTop, width, paddingLeft2, label, paddingRight}) {
    return (
      <View>
        <View style={styles.row}>
          <Text style={[styles.text, { paddingLeft: paddingLeft1, marginTop: marginTop, paddingRight: paddingRight }]}>
            {label}
          </Text>
          <TextInput
            style={{
              height: 20,
              width: width,
              paddingLeft: paddingLeft2,
              fontSize: 18,
            }}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
          />
        </View>
        <View style={styles.centerContainer}>
          <ProfileSeparator />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
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
      text: {
        color: 'black',
        fontSize: 18,
      },
})

export default ProfileCard;