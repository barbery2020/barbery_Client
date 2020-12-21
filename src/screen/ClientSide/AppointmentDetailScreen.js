import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';

import ReviewCard from '../../components/ReviewCard';
import Separator from '../../components/Separator';
import colors from '../../styles/colors';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/mainRecords';

function AppointmentDetailScreen({
  user,
  loading,
  getUser,
  route: {
    params: { item },
  },
}) {
  const [isCompleted, setCompleted] = React.useState(true);
  const [isReviewed, setReviewed] = React.useState(false);
  const [isReview, setReview] = React.useState('');
  const [isRating, setRating] = React.useState(0);

  const customer = [
    {
      image: require('../../assets/images/image_1.jpg'),
      name: 'Tuseeq Raza',
      time: 'Oct 23, 2020 4:50 PM',
      package: 'nill',
      promo: 'nill',
      specialist: 'Humza Jameel',
      specialistImage: require('../../assets/images/image_3.jpg'),
    },
  ];
  const services = [
    {
      id: 1,
      service: 'hair cut',
      price: 250,
    },
    {
      id: 2,
      service: 'shave',
      price: 200,
    },
    {
      id: 3,
      service: "Men's service",
      price: 400,
    },
  ];

  const review = {
    id: 1,
    name: 'Tuseeq Raza',
    rated: 4,
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    time: 'Oct 23, 2020 4:50 PM',
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getUser();
  }, []);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.cardPerson}>
        <Image
          style={styles.image}
          source={{
            uri: `data:${user?.image?.type};base64,${user?.image?.data}`,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{user?.firstName}</Text>
          <Text style={styles.time}>{`${item?.time} / ${
            item?.date?.split('T')[0]
          }`}</Text>
        </View>
      </View>
      <View style={styles.servicesDetails}>
        <View style={styles.flatItemHeading}>
          <Text style={styles.heading}>Services</Text>
          <Text style={styles.heading}>Price</Text>
        </View>
        <SafeAreaView style={styles.card}>
          <FlatList
            style={styles.flatScreen}
            data={item?.services}
            keyExtractor={(service) => service._id.toString()}
            renderItem={({ item }) => (
              <View style={styles.flatItem}>
                <Text>{item?.name}</Text>
                <Text>{item?.cost}</Text>
              </View>
            )}
          />
        </SafeAreaView>
        <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
          <Separator />
        </View>
        <View style={styles.flatItem}>
          <Text style={styles.heading}>Promo</Text>
          <Text>-{item?.promo != 0 && item?.promo}</Text>
        </View>
        <View style={styles.flatItem}>
          <Text style={styles.heading}>Total</Text>
          <Text>{item?.bill}</Text>
        </View>
      </View>
      <View style={styles.cardPerson}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.time}>specialist</Text>
        </View>
      </View>

      {/* Review Card */}
      {!item?.status && !isReviewed && (
        <View style={styles.reviewCard}>
          <View style={{ paddingVertical: 30 }}>
            <Separator />
          </View>
          <View style={styles.inputCard}>
            <Rating
              style={styles.rating}
              imageSize={30}
              ratingCount={5}
              startingValue={isRating}
              onFinishRating={(rating) => setRating(rating)}
              // readonly={true}
            />
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={4}
              maxLength={200}
              onChangeText={(text) => {
                setReview(text);
              }}
              value={isReview}
            />
            <LinearGradient
              colors={[colors.orange, colors.red]}
              style={styles.button}>
              <TouchableOpacity
                style={{ width: '100%', alignItems: 'center' }}
                onPress={() => {
                  alert('Profile is updated.');
                  // setCompleted(true);
                  setReviewed(true);
                }}>
                <Text style={styles.textBtn}>Save</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      )}

      {isReviewed && (
        <View style={styles.reviewCard}>
          <View style={{ paddingVertical: 30 }}>
            <Separator />
          </View>
          <ReviewCard
            title={review.name}
            time={review.time}
            text={isReview}
            rated={isRating}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  inputCard: {
    flex: 1,
    // flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowRadius: 20,
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 10,
  },
  cardPerson: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20,
  },
  reviewCard: {
    flex: 1,
    // marginTop: 30,
  },
  rating: {
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
  },
  detailsContainer: {
    marginLeft: 10,
    marginVertical: 10,
  },
  textInput: {
    height: 100,
    fontSize: 14,
    borderRadius: 15,
    elevation: 1,
    backgroundColor: colors.light,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
  },
  time: {
    color: colors.medium,
    fontWeight: '100',
    fontSize: 12,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 10,
  },
  flatScreen: {
    flex: 1,
    paddingTop: 15,
  },
  flatItem: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  flatItemHeading: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
  },
  servicesDetails: {
    margin: 20,
    paddingVertical: 25,
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 10,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 70,
  },
  textBtn: {
    color: colors.white,
    fontSize: 14,
  },
});

const mapStateToProps = ({ mainRecords: { user, loading } }) => ({
  user,
  loading,
});

const mapActionToProps = { getUser };
export default connect(
  mapStateToProps,
  mapActionToProps,
)(AppointmentDetailScreen);
