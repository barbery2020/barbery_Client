import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { toJson, createApi } from 'unsplash-js';
import axios from 'axios';
import UnsplashSearch, { UnsplashPhoto } from 'react-native-unsplash';

import nodeFetch from 'node-fetch';

// import Card from '../../components/AppointmentCard';
import SalonCard from '../../components/SalonCard';
import PhotoCard from '../../components/PhotoCard';
import colors from '../../styles/colors';

const salons = [
  {
    id: 1,
    image: require('../../assets/images/image_1.jpg'),
    name: 'Tuseeq Raza',
    address: 'G9, markaz, Islamabad',
    rating: 5,
  },
  {
    id: 2,
    image: require('../../assets/images/image_1.jpg'),
    name: 'Tuseeq Raza',
    address: 'G9, markaz, Islamabad',
    rating: 3.9,
  },
  {
    id: 3,
    image: require('../../assets/images/image_1.jpg'),
    name: 'Tuseeq Raza',
    address: 'G9, markaz, Islamabad',
    rating: 5,
  },
  {
    id: 4,
    image: require('../../assets/images/image_1.jpg'),
    name: 'Tuseeq Raza',
    address: 'G9, markaz, Islamabad',
    rating: 3,
  },
];

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
];

export default function HomeScreen(props) {
  const [isSearch, setSearch] = useState('');
  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [pics, setPics] = useState([]);

  // const unsplash = createApi({
  //   accessKey: 'SB5406YTRMmCCW4wD6OxYv8RkMyjqeY0pxy9z7PMbD4',
  //   fetch: nodeFetch,
  // });

  // unsplash.search.getPhotos({
  //   query: 'cat',
  //   page: 1,
  //   perPage: 10,
  //   orderBy: 'latest',
  // });

  // const unsplash = createApi({
  //   accessKey: 'SB5406YTRMmCCW4wD6OxYv8RkMyjqeY0pxy9z7PMbD4',
  // });

  // // non-feed example
  // unsplash.photos.get({ photoId: 'foo' }).then((result) => {
  //   if (result.errors) {
  //     // handle error here
  //     console.log('error occurred: ', result.errors[0]);
  //   } else {
  //     // handle success here
  //     const photo = result.response;
  //     console.log(photo);
  //   }
  // });
  // const clientID = 'SB5406YTRMmCCW4wD6OxYv8RkMyjqeY0pxy9z7PMbD4';
  // const url =
  //   'https://api.unsplash.com/photos?page=1&query=hairstyles&client_id' +
  //   clientID;

  // const unsplash = new Unsplash({
  //   accessKey: 'SB5406YTRMmCCW4wD6OxYv8RkMyjqeY0pxy9z7PMbD4',
  // });

  // const apiCall = async () => {
  //   // await axios.get(url).then((res) => {
  //   //   console.log(res);
  //   // });
  //   unsplash.search
  //     .photos(1, 20)
  //     .then(toJson)
  //     .then((json) => {
  //       setPics(json.results);
  //     });
  // };

  // useEffect(() => {
  //   apiCall();
  //   // console.log('hello G');
  //   // unsplash.search
  //   //   .photos('hairstyles men', 2, 20)
  //   //   .then(toJson)
  //   //   .then((json) => {
  //   //     setPics(json.results);
  //   //     console.log(json.results);
  //   //   });
  // }, []);

  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon
          style={{ margin: 10 }}
          name="bars"
          size={28}
          color={colors.dark}
          onPress={() => props.navigation.toggleDrawer()}
        />
        <IonIcon
          style={{ margin: 10, alignItems: 'flex-end' }}
          name="filter"
          size={28}
          color={colors.dark}
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <Text style={{ fontSize: 26, marginTop: -12, textAlign: 'center' }}>
        Find and Book best Services
      </Text>
      <View style={styles.textInput}>
        <TextInput
          style={{ flex: 1 }}
          maxLength={50}
          onChangeText={(text) => setSearch(text)}
          value={isSearch}
        />
        <Icon name="search1" color={colors.red} size={25} />
      </View>
      <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 5 }}>
        Best Salon
      </Text>
      <FlatList
        style={{ height: '35%' }}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={salons}
        keyExtractor={(salon) => salon.id.toString()}
        renderItem={({ item }) => (
          <SalonCard
            title={item.name}
            subTitle={item.address}
            rating={item.rating}
            image={item.image}
            onPress={() => props.navigation.navigate('Salon Profile')}
          />
        )}
      />
      <View style={{ backgroundColor: colors.dark2 }}>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 20,
            marginTop: 10,
            color: colors.white,
          }}>
          Latest Styles
        </Text>
        <FlatList
          style={{ height: '35%' }}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={photos}
          keyExtractor={(photo) => photo.id.toString()}
          renderItem={({ item, index }) => (
            <PhotoCard
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowInput: {
    width: '100%',
  },
  textInput: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 20,
    elevation: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.red,
    backgroundColor: colors.white,
  },
});
