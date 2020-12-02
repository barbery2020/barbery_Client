import React from 'react';
import {
  ImageBackground,
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import colors from '../../styles/colors';

function WelcomeScreen(props) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      {/* {isLoading
      ? <View style={styles.activity}>
          <ActivityIndicator
            size="large"
            color={colors.red}
            animating={isLoading}
          />
        </View>
      :  */}
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require('../../assets/images/image_10.jpg')}
        onLoadEnd={(isLoading) => setLoading(!isLoading)}>
        <Animatable.View animation="pulse" style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/icons/barbery-W.png')}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.buttonsContainer}>
          <LinearGradient
            colors={[colors.orange, colors.red]}
            style={[styles.button]}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'center'}}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textBtn}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animatable.View>
      </ImageBackground>
      {/* } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.white,
  },
  activity: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    marginVertical: 15,
    marginHorizontal: 10,
  },
  textBtn: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    position: 'absolute',
    top: -25,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
