import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../Home/Home';
import Chat from '../ChatPage/Chat';
import colors from '../config/colors';
import HomeDrawer from '../DrawerScreens/HomeDrawer';
import ChatList from '../ChatPage/ChatList';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {
  // const goToChat = () => {
  //   navigation.navigate('Chat');
  // };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeDrawer}
        options={{
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerRight: () => (
            <TouchableOpacity>
              <FeatherIcon
                name="send"
                color={colors.headerIconColor}
                size={29}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <FeatherIcon
                name="send"
                color={colors.headerIconColor}
                size={29}
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          // headerShown: false,
          headerTitle: (
            <Icon
              name="account-circle"
              color={colors.headerIconColor}
              size={29}
            />
          ),
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerRight: () => (
            <TouchableOpacity>
              <Icon
                name="flag-variant"
                color="red"
                size={29}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* This is the circle that is not working in the Implementing the stack screen in the drawer navigator */}
      {/* Point to be remember is that the drawer screen should be in the stack */}

      {/* This is the stack screen */}

      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          // headerShown: false,
          headerTitle: (
            <Icon
              name="account-circle"
              color={colors.headerIconColor}
              size={29}
            />
          ),
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
