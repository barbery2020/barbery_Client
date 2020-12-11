import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';

export default function SalonCard({ image, onPress }) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingVertical: 5,
    paddingHorizontal: 10,
  },
  card: {
    height: 200,
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
