import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import auth from '@react-native-firebase/auth';
import HomeStack from './StackScreens/HomeStack';
import WelcomeStack from './StackScreens/WelcomeStack';
const Verification = () => {
  return (
    <>
      <HomeStack />
    </>
  );
};

export default Verification;

const styles = StyleSheet.create({});
