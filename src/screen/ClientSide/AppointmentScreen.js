import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../../../config';

import Card from '../../components/AppointmentCard';
import colors from '../../styles/colors';

export default function AppointmentScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDate, setDate] = useState('Select Date');
  const [appointments, setAppointments] = useState();
  const [salons, setSalon] = useState();

  useEffect(() => {
    axios.get('/appointment/user').then((res) => {
      console.log(res.data);
      setAppointments(
        res.data.map((SS) => ({
          title: SS?.specialist?.name,
          image: `data:${SS?.specialist?.picture?.type};base64,${SS?.specialist?.picture?.data}`,
          status: SS.status,
          price: SS.bill,
          time: SS.timing,
          date: SS.date,
          id: SS._id,
          services: SS?.services,
          promo: SS?.promo,
          bill: SS?.bill,
          review: SS?.review,
        })),
      );
    });
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn('Selected Date: ', selectedDate);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const date = day + '/' + month + '/' + year;
    setDate(date);
    console.warn('Selected Date: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TouchableOpacity onPress={showDatePicker} style={styles.rowInput}>
          <View style={styles.textInput}>
            <TextInput
              style={{
                fontSize: 16,
                color: colors.dark,
                paddingVertical: 8,
              }}
              editable={false}
              maxLength={50}
              value={isDate}
            />
            <Icon name="calendar" color={colors.red} size={22} />
          </View>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <FlatList
        contentContainerStyle={{ paddingBottom: 15 }}
        style={styles.flatScreen}
        data={appointments}
        keyExtractor={(val, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'Rs. ' + item.price}
            time={item.time}
            status={item.status}
            image={item.image}
            selectedDate={isDate}
            onPress={() =>
              props.navigation.navigate('Appointment Details', { item })
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
  flatScreen: {
    flex: 1,
    paddingTop: 10,
  },
  row: {
    alignContent: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    // elevation: 5,
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
    margin: 15,
    borderWidth: 1,
    borderColor: colors.red,
    backgroundColor: colors.white,
  },
});
