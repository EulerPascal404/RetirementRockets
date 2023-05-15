import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import NewsCard from '../components/NewsCard';

export default function News({ navigation }) {
  const news = require('../../news.json');
  const newsArray = Object.values(news);

  const [search, setSearch] = useState('');

  const filteredNews = newsArray.filter((newsItem) =>
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
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          placeholderTextColor="gray"
          searchIcon={{ color: 'gray' }}
          clearIcon={{ color: 'gray' }}
        />
        <ScrollView persistentScrollbar={true}>{newsCards}</ScrollView>
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
  searchContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    height: 40,
  },
  searchInput: {
    color: 'black',
  },
});
