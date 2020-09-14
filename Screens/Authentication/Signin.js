import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {Button, TextInput, ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import colors from '../config/colors';

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

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{flex: 0.2}}>
        {!!fetching && <ActivityIndicator color={colors.loginSpinner} />}
      </View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}> Sign In </Text>
      </View>
      <View style={styles.formContainerStyle}>
        <TextInput
          label={'Email'}
          keyboardType="email-address"
          placeholder="Mail address"
          onChangeText={(text) => {
            setError;
            setEmail(text);
          }}
          error={isValid}
        />

        <TextInput
          label={'Password'}
          secureTextEntry
          placeholder="Password"
          error={isValid}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}
      <View style={styles.signInButtonContainerStyle}>
        <Button onPress={__doSignIn}>Signin </Button>
      </View>
      {spinner && (
        <ActivityIndicator animating={spinner} hidesWhenStopped={true} />
      )}
      <Button onPress={gotoSignup}>New user Signup here</Button>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});
