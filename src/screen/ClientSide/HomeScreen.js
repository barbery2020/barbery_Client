import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

// import Card from '../../components/AppointmentCard';
import SalonCard from '../../components/SalonCard';
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
  const [isSearch, setSearch] = useState('');

  return (
    <ScrollView style={styles.screen}>
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
      <Text style={{ fontSize: 26, textAlign: 'center' }}>
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
      <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
        Best Salon
      </Text>
      <FlatList
        horizontal={true}
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
            onPress={() => console.log('Salon pressed')}
          />
        )}
      />
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
    flex: 1,
    flexDirection: 'row',
    height: 40,
    borderRadius: 20,
    elevation: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 15,
    // marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.red,
    backgroundColor: colors.white,
  },
});
