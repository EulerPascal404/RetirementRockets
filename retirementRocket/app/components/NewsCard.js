import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const NewsCard = ({ title, author, url, imageUrl }) => {
  const onPress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 5,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default NewsCard;