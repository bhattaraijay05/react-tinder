import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({});
