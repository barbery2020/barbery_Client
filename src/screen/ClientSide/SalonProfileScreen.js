import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SpecialistCard from '../../components/SpecialistCard';
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
    title: 'Tuseeq Ahmed',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    title: 'Ahmed Raza',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 3,
    title: 'Humza Jameel',
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

export default function SalonProfileScreen() {
  return (
    <ScrollView style={styles.screen}>
      <ImageBackground style={styles.image} source={salon.image}>
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
              marginRight: 20,
              marginBottom: -25,
            }}>
            <Text style={styles.ratingText}>{salon.rating}</Text>
            <Foundation name="star" size={18} color="#F0C30E" />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 50,
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="enviromento" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="message1" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <AntDesign name="clockcircleo" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Booking</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: colors.light }}>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
          Salon Specialists
        </Text>
        <FlatList
          style={{ flex: 1 }}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 5 }}
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
