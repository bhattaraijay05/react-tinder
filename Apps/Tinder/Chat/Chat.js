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
  RefreshControl,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import db, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';

import colors from '../../../assets/config/colors';
import ChatMessages from './ChatMessages';

const image = {
  uri:
    'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
};

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const screenHeight = Dimensions.get('window').height;
  useEffect(() => {
    const send = db()
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            fullName: doc.data().fullName,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
          })),
        );
      });
    return () => {
      send();
    };
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const sendMessage = () => {
    db().collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: text,
      fullName: auth().currentUser.displayName,
    });
    setText('');
  };

  return (
    <ImageBackground source={image} style={styles.container}>
      <FlatList
        inverted={true}
        showsVerticalScrollIndicator={false}
        initialNumToRender={messages.length}
        data={messages}
        renderItem={({item}) => (
          <ChatMessages
            key={item.id}
            id={item.id}
            message={item.message}
            name={item.fullName}
            messageTime={new Date(item.timestamp?.toDate()).toLocaleString()}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.chatInput}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity style={styles.sendIcon} onPress={sendMessage}>
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
