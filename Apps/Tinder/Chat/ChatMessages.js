import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Modal,
  Vibration,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';
import colors from '../../../assets/config/colors';
const ChatMessages = ({message, name, messageTime, id}) => {
  const [modalvisible, setIsmodalVisible] = useState(false);
  const pressed = () => {
    Vibration.vibrate(25);
    setIsmodalVisible(true);
  };

  const deleteConfirmation = () => {
    setIsmodalVisible(false);
    Alert.alert(
      'Delete Message',
      'You cannot undo the deleted message. Do you still want to delete the message?',
      [
        {
          text: 'No',
          onPress: () => setIsmodalVisible(false),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => db().collection('messages').doc(id).delete(),
        },
      ],
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          setIsmodalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{paddingBottom: 10}}>
              <Button
                style={{backgroundColor: 'red'}}
                onPress={deleteConfirmation}>
                <Text style={{color: 'white'}}>Delete</Text>
              </Button>
            </View>
            <Button
              style={{backgroundColor: 'dodgerblue'}}
              onPress={() => {
                setIsmodalVisible(false);
              }}>
              Cancle
            </Button>
          </View>
        </View>
      </Modal>
      <View key={id}>
        {name === auth().currentUser.displayName ? (
          <TouchableOpacity
            style={styles.messages__right}
            onLongPress={pressed}>
            <View style={styles.sendingMessage}>
              <Text style={{alignSelf: 'flex-start', fontSize: 15}}>
                {message}
              </Text>
              {messageTime ? (
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 8,
                    color: colors.chat__message__time,
                    paddingLeft: 20,
                  }}>
                  {messageTime}
                </Text>
              ) : (
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 8,
                    color: colors.chat__message__time,
                    paddingLeft: 20,
                  }}>
                  sending...
                </Text>
              )}
            </View>
            <Image
              style={styles.message__icon}
              source={{
                uri: `https://source.unsplash.com/1600x900/?nature,water`,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.messages__left} onLongPress={pressed}>
            <Image
              style={styles.message__icon}
              source={{
                uri: `https://source.unsplash.com/1600x900/?nature,water`,
              }}
            />
            <View style={styles.incomingMessage}>
              <Text style={{alignSelf: 'flex-start', fontSize: 15}}>
                {message}
              </Text>

              {messageTime && (
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 8,
                    color: colors.chat__message__time,
                    fontWeight: 'bold',
                    paddingLeft: 20,
                  }}>
                  {messageTime}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default ChatMessages;

const styles = StyleSheet.create({
  chatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 5,
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
    backgroundColor: colors.chat__incomingMessageColor,
    borderRadius: 10,
    maxWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 0,
    marginTop: 'auto',
  },
  incomingMessage: {
    backgroundColor: colors.chat__sendingMessageColor,
    borderRadius: 10,
    maxWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 0,
    marginTop: 'auto',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'black',
    fontSize: 18,
    flex: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
