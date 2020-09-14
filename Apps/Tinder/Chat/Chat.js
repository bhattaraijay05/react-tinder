import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import colors from '../../../assets/config/colors';

const image = {
  uri:
    'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
};

const Chat = () => {
  const [text, setText] = useState('');
  return (
    <ImageBackground source={image} style={styles.container}>
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
          <Icon
            name="send"
            color={colors.chat__messageSendIconColor}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    backgroundColor: colors.chat__incomingMessageColor,
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
    backgroundColor: colors.chat__messageSendIconBackgroundColor,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  sendingMessage: {
    backgroundColor: colors.chat__sendingMessageColor,
    borderRadius: 10,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'black',
    fontSize: 18,
    flex: 1,
    padding: 10,
  },
});
