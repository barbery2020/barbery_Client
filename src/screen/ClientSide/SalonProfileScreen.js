import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Linking,
  LogBox,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Foundation from 'react-native-vector-icons/Foundation';
import Ant from 'react-native-vector-icons/AntDesign';

import SpecialistCard from '../../components/SpecialistCard';
import ReviewCard from '../../components/ReviewCard';
import colors from '../../styles/colors';
import axios from '../../../config';

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

export default function SalonProfileScreen(props) {
  const [saloonSpecialists, setSaloonSpecialists] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [salons, setSalon] = useState();
  const [getCoordinate, setCoordinate] = useState({
    latitude: 33.656969,
    longitude: 73.153954,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    //salon details
    axios.get(`/saloon/barber/${props?.route?.params?.id}`).then((res) => {
      setSalon({
        id: res.data._id,
        title: res.data.shopTitle,
        subTitle:
          res.data.address.length > 30
            ? res.data.address.slice(0, 30) + '...'
            : res.data.address,
        rating: 5,
        lat: Number(res?.data?.latitude),
        long: Number(res?.data?.longitude),
        image: `data:${res.data?.image?.type};base64,${res.data?.image?.data}`,
      });
      console.log(salons);
    });

    //specialists
    axios
      .get(`/saloon/saloonSpecialist/${props?.route?.params?.id}`)
      .then((res) => {
        // console.log(res.data);
        setSaloonSpecialists(
          res.data
            .filter((SS) => SS.status)
            .map((SS) => ({
              title: SS.name,
              image: `data:${SS?.picture?.type};base64,${SS?.picture?.data}`,
              id: SS._id,
            })),
        );
      });

    axios
      .get(`/saloon/review/barber/${props?.route?.params?.id}`)
      .then((res) => {
        setReviews(
          res.data?.map((val) => ({
            id: val?._id,
            name: val?.user?.firstName,
            time: val?.review?.date?.split('T')[0],
            image: `data:${val?.user?.image?.type};base64,${val?.user?.image?.data}`,
            text: val?.review?.userReview,
            rated: Number(val?.review?.stars),
          })),
        );
      });
  }, [props.route.params.id]);
  useEffect(() => {});

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const openGoogleMaps = () => {
    const scheme = 'geo:0,0?q=';
    const url = scheme + `${salons.lat},${salons.long}`;
    Linking.openURL(url);
  };

  return (
    <>
      <ImageBackground style={styles.image} source={{ uri: salons?.image }}>
        <LinearGradient
          colors={[(0, 0, 0, 0), (0, 0, 0, 0), colors.black]}
          style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              height: 25,
              width: 25,
              margin: 15,
              borderRadius: 15,
              elevation: 5,
              alignContent: 'center',
              backgroundColor: colors.red,
            }}
            onPress={() => props.navigation.goBack()}>
            <Ant name="arrowleft" size={25} color={colors.white} />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 5,
            }}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{salons?.title}</Text>
              <Text style={styles.subTitle}>{salons?.subTitle}</Text>
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
              <Text style={styles.ratingText}>{salons?.rating}</Text>
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
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() =>
            props.navigation.navigate('Gallery', { id: props.route.params.id })
          }>
          <Ant name="picture" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() =>
            props.navigation.navigate('Services and Packages', {
              id: props.route.params.id,
            })
          }>
          <Ant name="appstore-o" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() =>
            props.navigation.navigate('Select Services', {
              id: props.route.params.id,
            })
          }>
          <Ant name="clockcircleo" size={30} color={colors.red} />
          <Text style={{ fontSize: 12, color: colors.red }}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Ant name="message1" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => openGoogleMaps()}>
          <Ant name="enviromento" size={30} color={colors.dark} />
          <Text style={styles.textBtn}>Direction</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.screen}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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
            data={saloonSpecialists}
            keyExtractor={(listing) => listing.id}
            renderItem={({ item }) => (
              <SpecialistCard
                title={item.title}
                status={item.status}
                image={item.image}
              />
            )}
          />
        </View>
        <View style={{ flex: 1, marginTop: 5, backgroundColor: colors.white }}>
          <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
            Reviews
          </Text>
          <FlatList
            contentContainerStyle={{ paddingVertical: 10 }}
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
    </>
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
