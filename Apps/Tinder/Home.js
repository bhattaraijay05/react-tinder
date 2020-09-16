import React, {createRef, useRef, useState} from 'react';
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
import Swipe from './Swipe';
import {ActivityIndicator} from 'react-native-paper';

const swiperRef = createRef();
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const [spinner, setSpinner] = useState(false);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goToChat = () => {
    navigation.navigate('Chats');
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setSpinner(true);
    wait(1500).then(() => setSpinner(false));
  }, []);

  return (
    <View style={styles.home}>
      <View style={styles.home__header}>
        <TouchableOpacity
          style={styles.home__header__icons}
          onPress={goToProfile}>
          <Icons
            name="account-circle-outline"
            color={colors.headerIconColor}
            size={35}
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
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                color: 'red',
              }}>
              1
            </Text>
            <FeatherIcon
              name="message-circle"
              color={colors.home__header__message__icon}
              size={35}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.home__middle}>
        {spinner ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator animating={spinner} />
          </View>
        ) : (
          <Swipe forwardedRef={swiperRef} />
        )}
      </View>
      <View style={styles.home__footer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.home__footer__icon, {width: 60, height: 60}]}>
          <UndoIcon name="undo" color={colors.yellowHeartColor} size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}
          elevation={5}
          style={[styles.home__footer__icon, {width: 70, height: 70}]}>
          <EntypoIcons name="cross" color={colors.crossButtonColor} size={70} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onRefresh}
          style={[styles.home__footer__icon, {width: 60, height: 60}]}>
          <Icons
            name="lightning-bolt"
            color={colors.lightingButtonColor}
            size={45}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}
          style={[styles.home__footer__icon, {width: 70, height: 70}]}>
          <Icons name="heart" color={colors.greenHeartColor} size={45} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swiperRef.current.swipeTop()}
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
