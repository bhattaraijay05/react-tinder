import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../Welcome/Signin';
import Signup from '../Welcome/Signup';
import SplashScreen from '../Welcome/SplashScreen';

const Stack = createStackNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash Screen" component={SplashScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;

const styles = StyleSheet.create({});
