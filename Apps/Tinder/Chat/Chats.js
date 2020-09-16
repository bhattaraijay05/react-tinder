import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../../assets/config/colors';

const Chats = ({navigation}) => {
  const [boxColor, setBoxColor] = useState('#C39B77');
  const navigateToChat = () => {
    navigation.navigate('Chat'), setBoxColor('transparent');
  };
  return (
    <View>
      <TouchableOpacity
        onPress={navigateToChat}
        style={[styles.messageBox, {backgroundColor: `${boxColor}`}]}>
        <View style={{marginHorizontal: 10}}>
          <Image
            style={{width: 46, height: 46, borderRadius: 20, margin: 0}}
            source={{
              uri:
                'https://miro.medium.com/max/800/1*ok6bGm8g22WkigntmG1oww.png',
            }}
          />
        </View>

        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, color: colors.chats__nameColor}}>
              Tinder Team
            </Text>
            <Text
              style={{
                marginLeft: 150,
                fontSize: 12,
                color: colors.chats__message,
              }}>
              9:55 PM
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: colors.chats__message,
            }}>
            Hi {auth().currentUser.displayName}, Thanks for joining our team.
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: colors.chats__horizontalLine,
          borderBottomWidth: 1,
          marginHorizontal: 70,
        }}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  messageBox: {
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
