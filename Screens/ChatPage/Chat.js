import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import colors from '../config/colors';

const Chat = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.messages__left}>
          <>
            <Image
              style={styles.message__icon}
              source={{
                uri: `https://source.unsplash.com/1600x900/?nature,water`,
              }}
            />
            <View style={styles.incomingMessage}>
              <Text>
                Hello WOrld asdf asd fasd fasd fsd fsadfasd fasd fsadfHello
                WOrld asdf asd fasd fasd fsd fsadfasd fasd fsadfHello WOrld asdf
                asd fasd fasd fsd fsadfasd fasd fsadfHello WOrld asdf asd fasd
                fasd fsd fsadfasd fasd fsadf
              </Text>
            </View>
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messages__right}>
          <View style={styles.sendingMessage}>
            <Text>
              Hello WOrld asdf asd fasd fasd fsd fsadfasd fasd fsadfHello WOrld
              asdf asd fasd fasd fsd fsadfasd fasd fsadfHello WOrld asdf asd
              fasd fasd fsd fsadfasd fasd fsadfHello WOrld asdf asd fasd fasd
              fsd fsadfasd fasd fsadf
            </Text>
          </View>
          <Image
            style={styles.message__icon}
            source={{
              uri: `https://source.unsplash.com/1600x900/?nature,water`,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.chatInput}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity style={styles.sendIcon}>
          <Icon name="send" color={colors.messageSendIconColor} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 5,
  },
  incomingMessage: {
    backgroundColor: colors.incomingMessageColor,
    borderRadius: 10,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  messages__left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  messages__right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  container: {
    backgroundColor: colors.chatBackgroundColor,
    flex: 1,
  },
  message__icon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignSelf: 'flex-end',
    margin: 5,
  },
  sendIcon: {
    backgroundColor: colors.messageSendIconBackgroundColor,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  sendingMessage: {
    backgroundColor: colors.sendingMessageColor,
    borderRadius: 10,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 18,
    flex: 1,
    padding: 10,
  },
});
