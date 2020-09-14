import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../Home/Home';
import WelcomeStack from '../StackScreens/WelcomeStack';
import HomeStack from '../StackScreens/HomeStack';
import auth from '@react-native-firebase/auth';

const WelcomePage = ({navigation}) => {
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

  return <>{user ? <HomeStack /> : <WelcomeStack />}</>;
};

export default WelcomePage;

const styles = StyleSheet.create({});
