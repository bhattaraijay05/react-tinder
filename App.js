import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Authentication from './Apps/Tinder/Authentication.js';
import {StateProvider} from './Apps/Tinder/StateManagement/StateProvider.js';
import reducer, {initialState} from './Apps/Tinder/StateManagement/Reducer.js';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#000',
  },
};

const App = () => {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <StatusBar barStyle="light-content" />
            <Authentication />
          </PaperProvider>
        </NavigationContainer>
      </StateProvider>
    </>
  );
};

const styles = StyleSheet.create({});
export default App;
