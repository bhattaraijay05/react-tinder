import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../assets/config/colors';
import TinderIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import UndoIcon from 'react-native-vector-icons/FontAwesome';
import Cardss from './Card';
import Swipe from './Swipe';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goToChat = () => {
    navigation.navigate('Chats');
  };
  return (
    <View style={styles.home}>
      <View style={styles.home__header}>
        <TouchableOpacity
          style={styles.home__header__icons}
          onPress={goToProfile}>
          <Icons
            name="account-circle-outline"
            color={colors.headerIconColor}
            size={29}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.home__header__icons}
            onPress={() => {}}>
            <TinderIcon name="tinder" color={'red'} size={40} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.home__header__icons} onPress={goToChat}>
          <FeatherIcon
            name="message-circle"
            color={colors.headerIconColor}
            size={29}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.home__middle}>
        <Swipe />
      </View>
      <View style={styles.home__footer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.home__footer__icon, {width: 60, height: 60}]}>
          <UndoIcon name="undo" color={colors.yellowHeartColor} size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          elevation={5}
          style={[styles.home__footer__icon, {width: 70, height: 70}]}>
          <EntypoIcons name="cross" color={colors.crossButtonColor} size={70} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={[styles.home__footer__icon, {width: 60, height: 60}]}>
          <Icons
            name="lightning-bolt"
            color={colors.lightingButtonColor}
            size={45}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={[styles.home__footer__icon, {width: 70, height: 70}]}>
          <Icons name="heart" color={colors.greenHeartColor} size={45} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={[styles.home__footer__icon, {width: 60, height: 60}]}>
          <Icons name="star-face" color={colors.starColor} size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'white',
  },
  home__header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 20,
    marginHorizontal: 20,
  },
  home__footer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: SCREEN_HEIGHT > 700 ? 50 : 0,
  },
  home__footer__icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  home__middle: {
    flex: 1,
  },
});
