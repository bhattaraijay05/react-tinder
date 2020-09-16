import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Home';
import Profile from '../Profile/Profile';
import Chats from '../Chat/Chats';
import Chat from '../Chat/Chat';
import EditInfo from '../Profile/EditInfo';
import Settings from '../Profile/Settings';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        headerMode="default"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="Editinfo"
        component={EditInfo}
        options={{title: 'Edit'}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Edit'}}
      />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
