/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';

import colors from '../../styles/colors';

import Separator from '../../components/Separator';

const hairArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const shaveArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const stylingArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const hairColorArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const waxingArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const mensServicesArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const nailsArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const othersArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const packagesArr = [
  {
    name: 'select',
    price: '0',
    id: 1,
  },
  {
    name: 'fauji cut',
    price: '150',
    id: 2,
  },
  {
    name: 'spicy cut',
    price: '200',
    id: 3,
  },
];

const ServicesSelectionScreen = () => {
  const [hair, setHair] = useState(0);
  const [shave, setShave] = useState(0);
  const [styling, setStyling] = useState(0);
  const [hairColor, setHairColor] = useState(0);
  const [waxing, setWaxing] = useState(0);
  const [menServices, setMenServices] = useState(0);
  const [nails, setNails] = useState(0);
  const [others, setOthers] = useState(0);
  const [packages, setPackages] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);

  useEffect(() => {
    setDeviceHeight(Math.round(Dimensions.get('window').height));
  }, []);

  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          marginTop: deviceHeight * 0.02,
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Choose you service
        </Text>
        <Text style={{ fontSize: 16, color: colors.red, marginEnd: '5%' }}>
          {`Total: ${
            Number(hair) +
            Number(shave) +
            Number(styling) +
            Number(hairColor) +
            Number(waxing) +
            Number(menServices) +
            Number(nails) +
            Number(others) +
            Number(packages)
          }`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Hair</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={hair}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setHair(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {hairArr.length > 0 &&
              hairArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Shave</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={shave}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setShave(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {shaveArr.length > 0 &&
              shaveArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Styling</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={styling}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setStyling(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {stylingArr.length > 0 &&
              stylingArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Hair Color</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={hairColor}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setHairColor(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {hairColorArr.length > 0 &&
              hairColorArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Waxing</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={waxing}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setWaxing(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {waxingArr.length > 0 &&
              waxingArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Men's Services</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={menServices}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setMenServices(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {mensServicesArr.length > 0 &&
              mensServicesArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Nails</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={nails}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setNails(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {nailsArr.length > 0 &&
              nailsArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Others</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={others}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setOthers(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {othersArr.length > 0 &&
              othersArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View style={{ marginTop: deviceHeight * 0.03 }}>
        <Separator />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: deviceHeight * 0.03,
        }}>
        <Text style={styles.text}>Paclages</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={packages}
            style={{ flex: 1 }}
            onValueChange={(itemValue) => setPackages(itemValue)}
            itemStyle={styles.picker}
            mode={'dropdown'}>
            {packagesArr.length > 0 &&
              packagesArr.map((val) => (
                <Picker.Item
                  label={`${val.name} (${val.price})`}
                  value={val.price}
                />
              ))}
          </Picker>
        </View>
      </View>
      <View style={{ marginTop: deviceHeight * 0.03 }}>
        {Number(hair) +
          Number(shave) +
          Number(styling) +
          Number(hairColor) +
          Number(waxing) +
          Number(menServices) +
          Number(nails) +
          Number(others) +
          Number(packages) >
          0 && (
          <LinearGradient
            colors={[colors.orange, colors.red]}
            style={[styles.button]}>
            <TouchableOpacity
              onPress={() => {
                console.log('hi');
              }}>
              <Text style={styles.textBtn}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: '8%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 10,
    borderColor: colors.red,
    borderWidth: 1,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  textBtn: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: colors.light2,
    paddingHorizontal: 20,
    // paddingVertical: 5,
    marginHorizontal: 10,
    // marginTop: 5,
    // marginBottom: 20,
    width: '60%',
  },
  picker: {
    fontSize: 14,
    height: 40,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ServicesSelectionScreen;
