import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';

const Stack = createStackNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;

const styles = StyleSheet.create({});
