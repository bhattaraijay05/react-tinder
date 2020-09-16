import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import SettingsIcon from 'react-native-vector-icons/Feather';
import colors from '../../../assets/config/colors';
import BottomHandler from '../BottomHandler';
import MyPictures from './MyPictures';

const Profile = ({navigation}) => {
  const [spinner, setSpinner] = useState(false);

  const navigateToEditInfo = () => {
    navigation.navigate('Editinfo');
  };
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const openBottomSheet = () => {
    <BottomHandler />;
  };

  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.profile__header}>
          {auth().currentUser.photoURL ? (
            <Image
              source={{uri: `${auth().currentUser.photoURL}`}}
              style={{width: 100, height: 100, borderRadius: 100 / 2}}
            />
          ) : (
            <Icons
              name="account-circle"
              color={colors.profile__header__icon}
              size={80}
            />
          )}
          <Text style={styles.profile__header__name__text}>
            {auth().currentUser.displayName}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Text style={[styles.profile__header__name__text, {fontSize: 14}]}>
              {auth().currentUser.email}
            </Text>
          </View>
        </View>
        <View style={styles.profile__middle}>
          <View style={{paddingBottom: 90}}>
            <TouchableOpacity
              onPress={navigateToSettings}
              style={styles.profile__footer__icon}>
              <SettingsIcon
                name="settings"
                color={colors.greenHeartColor}
                size={45}
              />
            </TouchableOpacity>
            <Text style={styles.profile__middle__icon__text}>Settings</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.profile__footer__icon}>
              <Icons name="camera" color={colors.yellowHeartColor} size={45} />
            </TouchableOpacity>
            <Text style={styles.profile__middle__icon__text}>Add Media</Text>
          </View>
          <View style={{paddingBottom: 90}}>
            <TouchableOpacity
              onPress={navigateToEditInfo}
              style={styles.profile__footer__icon}>
              <Icons name="account-edit" color={colors.starColor} size={45} />
            </TouchableOpacity>
            <Text style={styles.profile__middle__icon__text}>Edit Info</Text>
          </View>
        </View>
        <View>
          <MyPictures />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flex: 1,
  },
  profile__header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  profile__header__name__text: {
    color: colors.profile__header__name__text,
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
  profile__middle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70,
  },
  profile__footer: {
    flex: 4,
    // backgroundColor: 'grey',
  },
});
