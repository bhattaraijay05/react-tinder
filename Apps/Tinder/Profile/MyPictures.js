import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Vibration,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import ImageView from 'react-native-image-viewing';
import {TouchableHighlight} from 'react-native-gesture-handler';
const images = [
  {
    uri: 'https://source.unsplash.com/1600x900/?iphone',
  },
  {
    uri: 'https://source.unsplash.com/1600x900/?mac',
  },
  {
    uri: 'https://source.unsplash.com/1600x900/?nature',
  },
];
const MyPictures = () => {
  const [visible, setIsVisible] = useState(false);
  const [modalvisible, setIsmodalVisible] = useState(false);

  const pressed = () => {
    Vibration.vibrate(25);
    setIsmodalVisible(true);
  };

  return (
    <View style={styles.myPictures}>
      <View style={styles.myPictures__pictures}>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image
            source={{uri: 'https://source.unsplash.com/1600x900/?iphone'}}
            style={styles.myPictures__pictures__image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image
            source={{uri: 'https://source.unsplash.com/1600x900/?mac'}}
            style={styles.myPictures__pictures__image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image
            source={{uri: 'https://source.unsplash.com/1600x900/?nature'}}
            style={styles.myPictures__pictures__image}
          />
        </TouchableOpacity>
        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          glideAlways={true}
          onRequestClose={() => setIsVisible(false)}
          onLongPress={pressed}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalvisible}
          onRequestClose={() => {
            setIsmodalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  setIsmodalVisible(false);
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyPictures;

const styles = StyleSheet.create({
  myPictures: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'red',
  },
  myPictures__pictures: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  myPictures__pictures__image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 5,
    marginBottom: 10,
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
