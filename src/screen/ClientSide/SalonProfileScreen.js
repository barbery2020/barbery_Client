import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  LogBox,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SpecialistCard from '../../components/SpecialistCard';
import ReviewCard from '../../components/ReviewCard';
import colors from '../../styles/colors';

const salon = {
  id: 1,
  image: require('../../assets/images/image_1.jpg'),
  title: 'Tuseeq Raza',
  subTitle: 'G9, markaz, Islamabad',
  rating: 4.5,
};

const listings = [
  {
    id: 1,
    title: 'Tuseeq',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    title: 'Raza',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 3,
    title: 'Humza',
    status: 'Inactive',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 4,
    title: 'Abdullah',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 5,
    title: 'Asim',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 6,
    title: 'Nadeem',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
];

const reviews = [
  {
    id: 1,
    name: 'Tuseeq Raza',
    rated: 5,
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 23, 2020 4:50 PM',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    name: 'Tuseeq Ahmed',
    rated: 4,
    text:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 17, 2020 9:50 AM',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 3,
    name: 'Tuseeq Raza',
    rated: 3,
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 23, 2020 4:50 PM',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 4,
    name: 'Tuseeq Ahmed',
    rated: 2,
    text:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 17, 2020 9:50 AM',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 5,
    name: 'Tuseeq Raza',
    rated: 1,
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 23, 2020 4:50 PM',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 6,
    name: 'Tuseeq Ahmed',
    rated: 0,
    text:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    time: 'Oct 17, 2020 9:50 AM',
    image: require('../../assets/images/image_2.jpg'),
  },
];

export default function SalonProfileScreen() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <ScrollView
      style={styles.screen}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <ImageBackground style={styles.image} source={salon.image}>
        <LinearGradient
          colors={[(0, 0, 0, 0), (0, 0, 0, 0), colors.black]}
          style={{ flex: 1 }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 5,
            }}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{salon.title}</Text>
              <Text style={styles.subTitle}>{salon.subTitle}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                right: 20,
                bottom: 5,
              }}>
              <Text style={styles.ratingText}>{salon.rating}</Text>
              <Foundation name="star" size={18} color="#F0C30E" />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="picture" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="appstore-o" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="clockcircleo" size={30} color={colors.red} />
          <Text style={{ fontSize: 12, color: colors.red }}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="message1" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="enviromento" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Direction</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 5, backgroundColor: colors.white }}>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
          Salon Specialists
        </Text>
        <FlatList
          style={{ flex: 1 }}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <SpecialistCard
              title={item.title}
              status={item.status}
              image={item.image}
              onPress={() => console.log(item.id)}
            />
          )}
        />
      </View>
      <View style={{ flex: 1, marginTop: 5, backgroundColor: colors.white }}>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
          Reviews
        </Text>
        <FlatList
          contentContainerStyle={{ paddingTop: 10 }}
          style={{ flex: 1 }}
          data={reviews}
          keyExtractor={(review) => review.id.toString()}
          renderItem={({ item }) => (
            <ReviewCard
              title={item.name}
              time={item.time}
              image={item.image}
              text={item.text}
              rated={item.rated}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 280,
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '200',
  },
  ratingText: {
    color: '#F0C30E',
    fontSize: 18,
    margin: 5,
  },
  textBtn: {
    fontSize: 12,
    color: colors.dark,
  },
});
