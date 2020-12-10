import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Rating } from 'react-native-ratings';

import colors from '../styles/colors';

export default function SalonCard({ image, title, subTitle, rating, onPress }) {
  return (
    <TouchableHighlight
      style={styles.screen}
      underlayColor={colors.light}
      onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 15,
              marginTop: -20,
            }}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Rating
              readonly={true}
              imageSize={15}
              ratingCount={1}
              startingValue={(1 / 5) * rating}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    // backgroundColor: colors.dark,
  },
  card: {
    height: 200,
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    color: colors.dark,
    fontWeight: '200',
  },
  ratingText: {
    color: '#F0C30E',
    fontSize: 18,
  },
});
