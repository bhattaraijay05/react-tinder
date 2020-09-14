import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import colors from '../../../assets/config/colors';

const EditInfo = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setValid] = useState(true);
  const [spinner, setSpinner] = useState(false);
  return (
    <ScrollView style={styles.editInfo}>
      <View style={styles.editInfo__header}>
        <TouchableOpacity onPress={() => {}}>
          {auth().currentUser.photoURL ? (
            <Image
              source={{uri: `${auth().currentUser.photoURL}`}}
              style={{width: 100, height: 100, borderRadius: 100 / 2}}
            />
          ) : (
            <Icons
              name="account-circle"
              color={colors.editInfo__header__icon}
              size={80}
            />
          )}
          <Icons
            name="lead-pencil"
            color={colors.editInfo__header__pen}
            size={30}
            style={{position: 'absolute', bottom: 5, right: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.editInfo__header__name__text}>
          {auth().currentUser.displayName}
        </Text>
      </View>

      <View style={styles.editInfo__details}>
        <TextInput
          type="name"
          selectionColor="red"
          textContentType="none"
          label={'Name'}
          placeholder="Name"
          onChangeText={(text) => {
            setName(text);
          }}
          autoCapitalize="none"
          error={isValid}
          style={styles.editInfo__details__textInput}
        />

        <TextInput
          type="email"
          selectionColor="red"
          label={'Email'}
          keyboardType="email-address"
          textContentType="none"
          placeholder="Email address"
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
          error={isValid}
          style={styles.editInfo__details__textInput}
        />
        <TextInput
          type="phone"
          selectionColor="red"
          textContentType="none"
          keyboardType="numeric"
          label={'Phone'}
          placeholder="Phone"
          onChangeText={(text) => {
            setPhone(text);
          }}
          error={isValid}
          style={styles.editInfo__details__textInput}
        />

        {spinner && <ActivityIndicator animating={spinner} />}
        <View style={styles.editInfo__lowerView__button}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.editInfo__lowerView__button__text}>
              Update Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditInfo;

const styles = StyleSheet.create({
  editInfo: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  editInfo__header: {
    backgroundColor: colors.editInfo__header,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  editInfo__header__name__text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
  editInfo__details: {
    flex: 1,
  },
  editInfo__details__textInput: {
    padding: 20,
    margin: 5,
  },
  editInfo__lowerView__button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  editInfo__lowerView__button__text: {
    backgroundColor: 'red',
    padding: 20,
    fontSize: 17,
    borderRadius: 30,
    width: '100%',
    color: 'white',
  },
});
