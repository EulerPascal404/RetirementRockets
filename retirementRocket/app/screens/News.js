import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from 'react-native';

import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import colors from '../config/colors';
import { SearchBar } from 'react-native-elements';
import NewsCard from '../components/NewsCard';


export default function News({ navigation }) {
  const data = require('../../news.json');
  const dataArray = Object.values(data);
  const newsCards = dataArray.map((newsItem) => (
    <NewsCard 
      title={newsItem.title} 
      author={newsItem.author} 
      url={newsItem.url} 
      imageUrl={newsItem.urlToImage} 
    />
  ));

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white' }}>
        <ScrollView persistentScrollbar={true}> 
          {newsCards}
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
