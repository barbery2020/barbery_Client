import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import profileImg from '../../utils/profileImg';

function ProfileScreen() {
  // const [image, setImage] = useState(profileImg.img);
  // const [firstName, setFirstName] = useState('Ahmed');
  // const [lastName, setLastName] = useState('Raza');
  // const [email, setEmail] = useState('ahmedraza1@gmail.com');
  // const [phone, setPhone] = useState('+923167512234');
  // const [password, setPassword] = useState('12345raza');
  const [isChange, setChange] = useState(false);

  const [form, setForm] = useState({
    firstName: 'Ahmed',
    lastName: 'Raza',
    email: 'ahmedraza1@gmail.com',
    phone: '+923167512234',
    password: '12345raza',
    image: profileImg.img,
  });

  const {firstName, lastName, email, phone, password, image} = form;

  const onChange = (text, name) => {
    setForm({...form, [name]: text});
  };

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        const uri = `data:${res.type};base64,${res.data}`;
        // setImage(uri);
        onChange(uri, 'image');
        setChange(true);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={selectFile}>
        <Image style={styles.profileImage} source={{uri: image}} />
      </TouchableOpacity>
      <View style={styles.profileData}>
        <View style={styles.row}>
          <View style={styles.rowInput}>
            <Text style={styles.text}>First Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Ahmed'}
              maxLength={50}
              onChangeText={(text) => {
                onChange(text, 'firstName');
                setChange(true);
              }}
              value={firstName}
            />
          </View>
          <View style={styles.rowInput}>
            <Text style={styles.text}>Last Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Raza'}
              maxLength={50}
              onChangeText={(text) => {
                onChange(text, 'lastName');
                setChange(true);
              }}
              value={lastName}
            />
          </View>
        </View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'e.g. abc@gmail.com'}
          maxLength={50}
          onChangeText={(text) => {
            onChange(text, 'email');
            setChange(true);
          }}
          value={email}
        />
        <Text style={styles.text}>Phone no.</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'+92'}
          keyboardType={'numeric'}
          maxLength={13}
          minLength={11}
          onChangeText={(text) => {
            onChange(text, 'phone');
            setChange(true);
          }}
          value={phone}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'***'}
          maxLength={20}
          onChangeText={(text) => {
            onChange(text, 'password');
            setChange(true);
          }}
          secureTextEntry={true}
          value={password}
        />

        {isChange && (
          <LinearGradient
            colors={[colors.orange, colors.red]}
            style={styles.button}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'center'}}
              onPress={() => alert('Profile is updated.')}>
              <Text style={styles.textBtn}>Save</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    </ScrollView>
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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 90,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderColor: colors.red,
    borderWidth: 3,
    marginVertical: 40,
  },
  CoverImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 250,
    width: '100%',
    borderBottomRightRadius: 50,
  },
  profileData: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  rowInput: {
    width: 180,
  },
  text: {
    color: colors.black,
    fontSize: 14,
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
    borderRadius: 25,
    elevation: 5,
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  timeRow: {
    flexDirection: 'row',
    height: 40,
    fontSize: 14,
    borderRadius: 25,
    elevation: 5,
    backgroundColor: colors.light,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
