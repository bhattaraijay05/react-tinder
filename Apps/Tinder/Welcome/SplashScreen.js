import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import TinderIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/config/colors';
import config from '../../../assets/config/config';
const SplashScreen = ({navigation}) => {
  const goToSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splashScreen__upperView}>
        <TinderIcon name="tinder" color={'red'} size={200} />
        <Text style={styles.splashScreen__upperView__text}>
          {config.appName}
        </Text>
      </View>
      <View style={styles.splashScreen__lowerView}>
        <Text style={styles.splashScreen__lowerView__text}>
          {config.welcomeMessage}
        </Text>
        <View style={styles.splashScreen__lowerView__button}>
          <TouchableOpacity onPress={goToSignIn}>
            <Text style={styles.splashScreen__lowerView__button__text}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreen: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.splashScreen__upperView,
  },
  splashScreen__upperView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreen__upperView__text: {
    fontSize: 50,
    color: 'white',
  },
  splashScreen__lowerView: {
    flex: 1,
    backgroundColor: colors.splashScreen__lowerView,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  splashScreen__lowerView__text: {
    fontSize: 16,
    color: 'grey',
  },
  splashScreen__lowerView__button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  splashScreen__lowerView__button__text: {
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 20,
    fontSize: 17,
    borderRadius: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});
