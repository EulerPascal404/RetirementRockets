import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from 'react-native';
import React, { useState } from 'react';


import MyButton from '../components/MyButton';
import ProfileSeparator from '../components/ProfileSeparator';
import colors from '../config/colors';
import { SearchBar } from 'react-native-elements';
import NewsCard from '../components/NewsCard';

export default function News({ navigation }) {
  const data = require('../../news.json');
  const dataArray = Object.values(data);

  const [search, setSearch] = useState('');

  const filteredNews = dataArray.filter((newsItem) =>
    newsItem.title.toLowerCase().includes(search.toLowerCase()) || 
    newsItem.author.toLowerCase().includes(search.toLowerCase())
  );

  const newsCards = filteredNews.map((newsItem) => (
    <NewsCard
      key={newsItem.title}
      title={newsItem.title}
      author={newsItem.author}
      url={newsItem.url}
      imageUrl={newsItem.urlToImage}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white' }}>
        <SearchBar
          placeholder="Search news..."
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <ScrollView persistentScrollbar={true}>
          {newsCards}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
