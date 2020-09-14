import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Cards from './Cards';
import db from '@react-native-firebase/firestore';

const Swipe = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db()
      .collection('users')
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            age: doc.data().age,
            profession: doc.data().profession,
            image: doc.data().image,
          })),
        );
      });
  }, []);

  const leftSwiped = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          width: 700,
          height: 700,
          position: 'absolute',
        }}>
        <Text>No</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={users}
        renderCard={(user) => (
          <Cards
            name={user?.name}
            age={user?.age}
            profession={user?.profession}
            image={user?.image}
          />
        )}
        onSwipedLeft={leftSwiped}
        onSwipedRight={() => {}}
        onSwipedAll={() => {}}
        cardIndex={0}
        backgroundColor={'white'}
        stackSize={2}
        outputRotationRange={['-40deg', '0deg', '40deg']}
        animateCardOpacity={true}
      />
    </View>
  );
};

export default Swipe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
