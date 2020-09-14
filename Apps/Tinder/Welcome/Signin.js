import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Animated,
  ScrollView,
} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import colors from '../../../assets/config/colors';
// import Animated from 'react-native-reanimated';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const gotoSignup = () => {
    navigation.navigate('Signup');
  };

  const __doSignIn = () => {
    if (!email || !password) {
      setError('Email and password fields are required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    }
    setSpinner(true);
    handleSignin(email, password);
  };

  const handleSignin = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        console.log('User is Logged IN');
      }
    } catch (e) {
      const err = e.message;
      Alert.alert(err);
      setSpinner(false);
    }
  };
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 5000,
  //   }).start();
  // };

  return (
    <View style={styles.signInScreen}>
      <View style={styles.signInScreen__upperView}>
        {/* <TinderIcon name="tinder" color={'red'} size={200} /> */}
        <Text style={styles.signInScreen__upperView__text}>Sign In</Text>
      </View>
      <Animated.View style={[styles.signInScreen__lowerView]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>Enter your email</Text>
          <TextInput
            label={'Email'}
            keyboardType="email-address"
            placeholder="Email address"
            onChangeText={(text) => {
              setError;
              setEmail(text);
            }}
            autoCapitalize="none"
            error={isValid}
            style={styles.signInScreen__lowerView__textInput}
          />

          <Text>Enter your password</Text>
          <TextInput
            label={'Password'}
            secureTextEntry
            placeholder="Password"
            error={isValid}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={styles.signInScreen__lowerView__textInput}
          />

          {spinner && <ActivityIndicator animating={spinner} />}
          <View style={styles.signInScreen__lowerView__button}>
            <TouchableOpacity onPress={__doSignIn}>
              <Text style={styles.signInScreen__lowerView__button__text}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInScreen__lowerView__button}>
            <TouchableOpacity onPress={gotoSignup}>
              <Text style={styles.signInScreen__lowerView__button__text}>
                Sign Up Here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  signInScreen: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.signInScreen__upperView,
  },
  signInScreen__upperView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInScreen__upperView__text: {
    fontSize: 50,
    color: 'white',
  },
  signInScreen__lowerView: {
    flex: 3,
    backgroundColor: colors.signInScreen__lowerView,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  signInScreen__lowerView__text: {
    fontSize: 16,
    color: 'grey',
  },
  signInScreen__lowerView__button: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  signInScreen__lowerView__button__text: {
    backgroundColor: 'red',
    padding: 20,
    fontSize: 17,
    borderRadius: 30,
    width: '100%',
    color: 'white',
  },
  signInScreen__lowerView__textInput: {
    padding: 20,
  },
});
