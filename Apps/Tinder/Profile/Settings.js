import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Button, ActivityIndicator} from 'react-native-paper';
const Settings = () => {
  const [spinner, setSpinner] = useState(false);

  const signOut = () => {
    Alert.alert(
      'Sign Out',
      'Do you really wanna sign out?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setSpinner(true);
            auth().signOut();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <Button onPress={signOut}>Log Out</Button>
      {spinner && <ActivityIndicator animating={spinner} />}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
