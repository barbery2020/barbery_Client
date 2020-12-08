import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import { Rating, AirbnbRating } from 'react-native-ratings';

import colors from '../styles/colors';

function ReviewCard({ title, text, rated, time }) {
  return (
    // <TouchableHighlight
    //   style={styles.screen}
    //   underlayColor={colors.light}
    //   // onPress={onPress}
    // >
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <View style={styles.detailsContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Rating
              style={styles.rating}
              imageSize={30}
              ratingCount={5}
              startingValue={rated}
              readonly={true}
            />
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
    // </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  completed: {
    color: colors.orange,
  },
  // screen: {
  //   flex: 1,
  //   paddingVertical: 8,
  //   paddingHorizontal: 15,
  // },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowRadius: 20,
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 2,
    alignItems: 'flex-start',
    marginVertical: 10,
    // backgroundColor: colors.red,
  },
  rightContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  time: {
    color: colors.medium,
    fontWeight: '100',
    fontSize: 12,
    marginTop: 5,
  },
  text: {
    textAlign: 'justify',
    color: colors.dark,
    paddingBottom: 10,
    marginRight: 5,
    paddingHorizontal: 10,
  },
  rating: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginHorizontal: 15,
  },
  status: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 10,
  },
});

export default ReviewCard;
