import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {Button} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import colors from '../../assets/config/colors';

import ImagePicker from 'react-native-image-crop-picker';

export default function BottomHandler() {
  const openBottomSheet = () => {
    sheetRef.current.snapTo(0);
  };
  const cancleBottomSheet = () => {
    sheetRef.current.snapTo(1);
  };

  const takeImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };
  const pickImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path);
      setImage(image.path);
    });
  };

  const renderContent = () => (
    <View style={styles.bottomHandler}>
      <View style={styles.bottomHandler__text}>
        <Text style={styles.bottomHandler__text__UP}>Upload Photo</Text>
        <Text style={styles.bottomHandler__text__CYP}>
          Choose Your Pictures
        </Text>
      </View>
      <View style={styles.bottomHandler__buttons}>
        <Button
          style={styles.bottomHandler__buttons__button}
          onPress={takeImageFromCamera}>
          Take Photo
        </Button>
        <Button
          style={styles.bottomHandler__buttons__button}
          onPress={pickImageFromLibrary}>
          Choose from Library
        </Button>
        <Button
          style={styles.bottomHandler__buttons__button}
          onPress={cancleBottomSheet}>
          Cancle
        </Button>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button onPress={openBottomSheet}>Open Bottom Sheet</Button>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['48%', 0]}
        initialSnap={1}
        renderContent={renderContent}
        enabledGestureInteraction={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomHandler: {
    backgroundColor: 'white',
    paddingTop: 20,
    borderRadius: 20,
  },
  bottomHandler__text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHandler__text__UP: {
    fontSize: 28,
  },
  bottomHandler__text__CYP: {
    fontSize: 22,
  },
  bottomHandler__buttons__button: {
    backgroundColor: colors.bottomHandler__buttons__button,
    marginTop: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 5,
  },
});
