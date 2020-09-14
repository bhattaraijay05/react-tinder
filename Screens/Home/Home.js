import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const Home = ({navigation}) => {
  const [spinner, setSpinner] = useState(false);
  const navigateToChat = () => {
    navigation.navigate('Chat');
  };
  const navigateToChatList = () => {
    navigation.navigate('ChatList');
  };

  // const okPressed = () => {

  // };

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
      <Text>This is the homepage.</Text>
      <Button raised theme={{roundness: 3}} onPress={signOut}>
        Log Out
      </Button>
      {spinner && <ActivityIndicator animating={spinner} />}

      <Button raised theme={{roundness: 3}} onPress={navigateToChat}>
        Go To Chat Page
      </Button>
      <Button raised theme={{roundness: 3}} onPress={navigateToChatList}>
        Go To Chat List
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
