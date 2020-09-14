import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import Axios from 'axios';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/config/colors';

// useEffect(() => {
//   async function fetchUser() {
//     await Axios.get('https://randomuser.me/api/?gender=female')
//       .then((res) => console.log(res))
//       .catch((e) => console.log(e));
//   }
//   return () => {
//     fetchUser();
//   };
// }, []);

const Users = [
  {
    id: '1',
    name: 'Kylie Jenner',
    age: '22',
    profession: 'Entrepreneur, Model',
    uri:
      'https://pbs.twimg.com/profile_images/1207332742964236288/EHK-o2A-_400x400.jpg',
  },
  {
    id: '2',
    name: 'Taylor Swift',
    age: '29',
    profession: 'Singer,Songwriter, Model',
    uri:
      'https://pyxis.nymag.com/v1/imgs/ba2/f85/099d4651e7c4a62bcba5da1fbc5c16be70-18-taylor-swift.rsquare.w1200.jpg',
  },
  {
    id: '3',
    name: 'Bebe Rexha',
    age: '35',
    profession: 'Singer, Songwriter',
    uri:
      'https://i.insider.com/5d52c0b9dcc1e73e57445714?width=1100&format=jpeg&auto=webp',
  },
  {
    id: '4',
    name: 'Chris Hemsworth',
    age: '42',
    profession: 'Actor, Thor',
    uri:
      'https://akns-images.eonline.com/eol_images/Entire_Site/2019526/rs_634x1024-190626041713-634-Chris-Hemsworth-TAG-Heuer-AUS-LT-062619-GettyImages-1158321948.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top',
  },
  {
    id: '5',
    name: 'Robert Downey Jr',
    age: '53',
    profession: 'Actor, Ironman',
    uri:
      'https://i.pinimg.com/originals/8e/21/29/8e2129f44804db65316ed3db92cf8552.jpg',
  },
];

export default class App extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });
  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    });
  }

  renderUsers = () => {
    // useEffect(() => {
    //   // if [], run once when the row loads, and dont run again
    //   async function fetchData() {
    //     const request = await axios.get(
    //       'https://randomuser.me/api/?gender=female',
    //     );
    //     // setMovies(request.data.results);
    //     console.log(request);
    //     return request;
    //   }
    //   fetchData();
    // }, []);

    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                width: '90%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{rotate: '-30deg'}],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{rotate: '30deg'}],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>
            <ImageBackground
              style={styles.cards__image}
              imageStyle={{borderRadius: 10}}
              source={{
                uri: item.uri,
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  paddingLeft: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.cards__image__text__name}>
                    {item.name},
                  </Text>
                  <Text style={styles.cards__image__text__age}>
                    {' '}
                    {item.age}
                  </Text>
                </View>
                <View>
                  <Text style={styles.cards__image__text__job}>
                    {item.profession}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{scale: this.nextCardScale}],
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute',
              },
            ]}>
            <Animated.View
              style={{
                opacity: 0,
                transform: [{rotate: '-30deg'}],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{rotate: '30deg'}],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>
            <Image
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={{uri: item.uri}}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          {this.renderUsers()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards__card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  cards__image: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    position: 'relative',
    backgroundColor: 'white',
  },
  cards__image__text__name: {
    fontSize: 25,
    color: colors.cards__image__text__name,
    fontWeight: '600',
  },
  cards__image__text__age: {
    fontSize: 25,
    color: colors.cards__image__text__age,
    fontWeight: '400',
  },
  cards__image__text__job: {
    fontSize: 22,
    color: colors.cards__image__text__job,
    fontWeight: '400',
  },
});
