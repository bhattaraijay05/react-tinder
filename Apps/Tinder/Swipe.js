import React, {useEffect, useState, useRef, createRef} from 'react';
import {StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Cards from './Cards';
import {string} from 'prop-types';
import db from '@react-native-firebase/firestore';
import OverlayLabel from './OverlayLabel';
import IconButton from './IconButton';

const Swipe = ({forwardedRef}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = db()
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
    return () => {
      fetchUsers();
    };
  }, []);
  return (
    <Swiper
      ref={forwardedRef}
      animateCardOpacity
      cards={users}
      renderCard={(user) => (
        <View style={{backgroundColor: 'white'}} key={user?.id}>
          {users ? (
            <Cards
              name={user?.name}
              age={user?.age}
              profession={user?.profession}
              image={user?.image}
              key={user?.id}
            />
          ) : (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        </View>
      )}
      cardIndex={0}
      backgroundColor="white"
      stackSize={2}
      infinite={true}
      showSecondCard
      disableBottomSwipe
      animateOverlayLabelsOpacity
      overlayLabels={{
        top: {
          title: 'SUPER LIKE',
          element: <OverlayLabel label="SUPER LIKE" color="#3498db" />,
          style: {
            wrapper: {
              alignItems: 'flex-end',
              paddingTop: '85%',
            },
          },
        },
        left: {
          title: 'NOPE',
          element: <OverlayLabel label="NOPE" color="#E5566D" />,
          style: {
            wrapper: {
              alignItems: 'flex-end',
              paddingTop: '30%',
            },
          },
        },
        right: {
          title: 'LIKE',
          element: <OverlayLabel label="LIKE" color="#4CCC93" />,
          style: {
            wrapper: {
              alignItems: 'flex-start',
              paddingTop: '30%',
            },
          },
        },
      }}
    />
  );
};

export default Swipe;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#F5FCFF',
  // },
});
