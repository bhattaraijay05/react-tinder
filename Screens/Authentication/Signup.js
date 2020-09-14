import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const gotoLogin = () => {
    navigation.navigate('Signin');
  };

  const __doSignUp = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    }

    handleSignup(email, password);
  };

  const handleSignup = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{flex: 0.2}}>{!!fetching && <ActivityIndicator />}</View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}> Sign Up </Text>
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
        <Button onPress={__doSignUp}>Signup</Button>
      </View>

      <Button onPress={gotoLogin}>Already a user Login Here</Button>
    </SafeAreaView>
  );
};

export default Signup;
const styles = StyleSheet.create({});
