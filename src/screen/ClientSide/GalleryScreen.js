import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageGalleryCard from '../../components/ImageGalleryCard';
import colors from '../../styles/colors';

const photos = [
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
];

export default function GalleryScreen(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);
  const columns = 4;

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ flex: 1 }}
        numColumns={columns}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={photos}
        keyExtractor={(photo) => photo.id.toString()}
        renderItem={({ item, index }) => (
          <ImageGalleryCard
            image={item.uri}
            onPress={() => {
              setIsVisible(true);
              setImageIndex(index);
            }}
          />
        )}
      />
      <ImageView
        images={photos}
        imageIndex={imageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatScreen: {
    flex: 1,
    paddingTop: 10,
  },
});
