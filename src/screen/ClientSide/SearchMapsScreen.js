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
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/AntDesign';

import SalonCard from '../../components/SalonCard';
import colors from '../../styles/colors';
import axios from '../../../config';
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

const pointers = [
  {
    id: 1,
    title: 'hello',
    coordinates: {
      latitude: 33.657901,
      longitude: 73.158138,
    },
  },
  {
    id: 2,
    title: 'hello',
    coordinates: {
      latitude: 33.657431,
      longitude: 73.157623,
    },
  },
  {
    id: 3,
    title: 'hello',
    coordinates: {
      latitude: 33.657711,
      longitude: 73.157436,
    },
  },
  {
    id: 4,
    title: 'hello',
    coordinates: {
      latitude: 33.65771,
      longitude: 73.157328,
    },
  },
  {
    id: 5,
    title: 'hello',
    coordinates: {
      latitude: 33.657118,
      longitude: 73.157549,
    },
  },
];

const height = Math.round(Dimensions.get('window').height);

export default function HomeScreen(props) {
  const [search, setSearch] = useState('');
  const [markers, setMarkers] = useState([]);
  const [getMarginBottom, setMarginBottom] = useState(1);
  const [saloons, setSaloons] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [getCoordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    setFilteredData((old) => {
      if (!search) return rawData;
      else {
        let regex = new RegExp(search.trim().toLowerCase());
        return rawData.filter((RR) =>
          regex.test(JSON.stringify(RR).trim().toLowerCase()),
        );
      }
    });
  }, [search, rawData]);

  useEffect(() => {
    setMarkers(pointers);
  }, []);

  useEffect(() => {
    setMarkers(
      filteredData.map((SS) => {
        return {
          id: SS._id,
          coordinates: {
            latitude: parseFloat(SS.latitude),
            longitude: parseFloat(SS.longitude),
          },
        };
      }),
    );
    setSaloons(
      filteredData.map((SS) => {
        return {
          id: SS._id,
          name: SS.shopTitle,
          address:
            SS.address.length > 30
              ? SS.address.slice(0, 30) + '...'
              : SS.address,
          rating: 5,
          image: {
            uri: `data:${SS?.image?.type};base64,${SS?.image?.data}`,
          },
        };
      }),
    );
  }, [filteredData]);

  useEffect(() => {
    if (saloons.length === 0) {
      axios.get('/saloon/allSaloons').then((res) => {
        console.log('greeeeeen', res.data);
        setRawData(res.data);
      });
    }
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCoordinate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        });
      },
      (error) => setCoordinate({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }, []);

  const onChangeLocation = (region) => {
    console.log(region);
    setCoordinate({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  };

  return (
    <View style={styles.screen}>
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
          onPress={() => {
            // search && setSearched(true);
          }}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[styles.map, { marginBottom: getMarginBottom }]}
          region={{
            latitude: getCoordinate.latitude,
            longitude: getCoordinate.longitude,
            latitudeDelta: getCoordinate.latitudeDelta,
            longitudeDelta: getCoordinate.longitudeDelta,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onMapReady={() => {
            setMarginBottom(100);
          }}
          onRegionChangeComplete={(region) => onChangeLocation(region)}>
          {markers.map((marker) => (
            <Marker key={marker.id} coordinate={marker.coordinates}>
              <Image
                style={{ height: 35, width: 35 }}
                source={require('../../assets/icons/pointer.png')}
              />
            </Marker>
          ))}
        </MapView>
      </View>
      <FlatList
        style={styles.flatList}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={saloons}
        keyExtractor={(salon, index) => index.toString()}
        renderItem={({ item }) => (
          <SalonCard
            title={item.name}
            subTitle={item.address}
            rating={item.rating}
            image={item.image}
            onPress={
              () => props.navigation.navigate('Salon Profile', { id: item.id })
              // console.log(item)
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowInput: {
    width: '90%',
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
    height: height * 0.66,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  flatList: {
    position: 'absolute',
    height: height * 0.3,
    top: height * 0.6,
    left: 0,
  },
});
