import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

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

export default function HomeScreen(props) {
  const [search, setSearch] = useState('');
  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [pics, setPics] = useState([]);

  const height = Math.round(Dimensions.get('window').height);

  const clientID = 'SB5406YTRMmCCW4wD6OxYv8RkMyjqeY0pxy9z7PMbD4';
  const url = `https://api.unsplash.com/search/photos?page=${Math.floor(
    1 + Math.random() * 3,
  )}&per_page=30&query=man-face&client_id=${clientID}`;

  const apiCall = async () => {
    const res = await axios.get(url);

    const photos = res.data?.results?.map(
      ({ id, urls: { regular, small } }) => ({
        id,
        uri: regular,
        small,
      }),
    );
    setPics(photos);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <ScrollView style={styles.screen}>
      <Icon
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}
        name="bars"
        size={28}
        color={colors.dark}
        onPress={() => props.navigation.toggleDrawer()}
      />
      <IonIcon
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        name="filter"
        size={28}
        color={colors.dark}
        onPress={() => props.navigation.toggleDrawer()}
      />
      <View style={{ marginTop: height * 0.05 }}>
        <Text
          style={{
            fontSize: 25,

            textAlign: 'center',
          }}>
          Find and Book best Services
        </Text>
        <View style={styles.textInput}>
          <TextInput
            style={{ flex: 1 }}
            maxLength={50}
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
          <Icon
            name="search1"
            color={colors.red}
            size={30}
            onPress={() => props.navigation.navigate('Search')}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 5 }}>
          Best Salon
        </Text>
        <FlatList
          style={{ height: height * 0.315 }}
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
            style={{ height: height * 0.31 }}
            horizontal={true}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={pics}
            keyExtractor={(photo) => photo.id.toString()}
            renderItem={({ item, index }) => (
              <PhotoCard
                image={item.small}
                onPress={() => {
                  setIsVisible(true);
                  setImageIndex(index);
                }}
              />
            )}
          />
          <ImageView
            images={pics}
            imageIndex={imageIndex}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
          />
        </View>
      </View>
    </ScrollView>
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
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: '100%',
    marginTop: -10,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
