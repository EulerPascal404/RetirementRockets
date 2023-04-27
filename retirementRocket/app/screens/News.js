import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from 'react-native';

import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import colors from '../config/colors';
import { SearchBar } from 'react-native-elements';
import NewsCard from '../components/NewsCard';


export default function News({ navigation }) {
 
  
    return(
        <View style = {styles.container}>
          <View style = {{backgroundColor: 'white'}}>
           <ScrollView persistentScrollbar={true}> 

            <NewsCard 
              title="Fremd student earns prestigious national chess prize" 
              author="Madhu Krishnamurthy" 
              url="https://www.dailyherald.com/news/20230423/fremd-student-earns-prestigious-national-chess-prize" 
              imageUrl="https://www.dailyherald.com/storyimage/DA/20230423/NEWS/230429726/AR/0/AR-230429726.jpg&updated=202304240619&MaxW=900&maxH=900&noborder&Q=80" 
            />

            <NewsCard 
              title="Chinese retailers helped lift Meta’s first-quarter sales in a tough online advertising market" 
              author="Jonathan Vanian" 
              url="https://www.cnbc.com/2023/04/26/meta-q1-23-earnings-boosted-by-chinese-retailers-buying-ads.html" 
              imageUrl="https://image.cnbcfm.com/api/v1/image/107131933-1665418142088-gettyimages-1327685522-kd1_0333_20210708121128478.jpeg?v=1682551934&w=740&h=416&ffmt=webp&vtcrop=y" 
            />  
          </ScrollView>
          </View>
          

         
        
          
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "white"
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

    gray: {
      color: '#808080',
      fontSize: 16,
    },

    lightGrayBox: {
      width: '100%',
      height: 30,
      backgroundColor: 'lightgray',
      alignItems: 'center'
    }
  });