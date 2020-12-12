import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Card from '../../components/Card';
import colors from '../../styles/colors';

const listings = [
  {
    id: 1,
    title: 'Hair Cutting',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    title: 'Trending Beard Dressing',
    category: 'Shave',
    price: 150,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 3,
    title: 'Hair Dressing',
    category: 'Styling',
    price: 170,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_3.jpg'),
  },
  {
    id: 4,
    title: 'Faded Hair Cut',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_9.jpg'),
  },
  {
    id: 5,
    title: 'Hair Cutting',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 6,
    title: 'Trending Beard Dressing',
    category: 'Shave',
    price: 150,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 7,
    title: 'Hair Dressing',
    category: 'Styling',
    price: 170,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_3.jpg'),
  },
  {
    id: 8,
    title: 'Faded Hair Cut',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_9.jpg'),
  },
  {
    id: 9,
    title: 'Hair Cutting',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 10,
    title: 'Trending Beard Dressing',
    category: 'Shave',
    price: 150,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 11,
    title: 'Hair Dressing',
    category: 'Styling',
    price: 170,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_3.jpg'),
  },
  {
    id: 12,
    title: 'Faded Hair Cut',
    category: 'Hair Cut',
    price: 200,
    about:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: require('../../assets/images/image_9.jpg'),
  },
];

const Tab = createMaterialTopTabNavigator();

function ServicesList(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 15 }}
        style={styles.flatScreen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'Rs.' + item.price}
            category={item.category}
            about={item.about}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

function PackagesList(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 15 }}
        style={styles.flatScreen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'Rs.' + item.price}
            category={'Package Deal'}
            about={item.about}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

function ServicesListScreen(props) {
  return (
    <Tab.Navigator
      initialRouteName="Services"
      tabBarOptions={{
        labelStyle: { fontSize: 14 },
        indicatorStyle: { backgroundColor: colors.white },
        activeTintColor: colors.white,
        inActiveTintColor: colors.lightRed,
        style: { backgroundColor: colors.red },
      }}>
      <Tab.Screen
        name="Services"
        component={ServicesList}
        options={{
          tabBarLabel: 'Services',
        }}
      />
      <Tab.Screen
        name="Packages"
        component={PackagesList}
        options={{
          tabBarLabel: 'Packages',
        }}
      />
    </Tab.Navigator>
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
  button: {
    backgroundColor: colors.red,
    borderRadius: 30,
    position: 'absolute',
    elevation: 5,
    right: 20,
    bottom: 30,
    padding: 10,
    width: 60,
    height: 60,
  },
  icon: {
    tintColor: colors.white,
    padding: 10,
    width: 40,
    height: 40,
  },
});

export default ServicesListScreen;
