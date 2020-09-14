import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import auth from '@react-native-firebase/auth';
import WelcomeStack from './StackScreens/WelcomeStack';
import HomeStack from './StackScreens/HomeStack';
import Verification from './Verification';

const Authentication = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // userlogged in
        setUser(authUser);
        console.log(authUser);
      } else {
        // userlogged out
        setUser(null);
        console.log('User is logged out');
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <>{user ? <Verification /> : <WelcomeStack />}</>;
};

export default Authentication;

const styles = StyleSheet.create({});
