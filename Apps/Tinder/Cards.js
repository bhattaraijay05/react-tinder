import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Card} from 'react-native-paper';

import colors from '../../assets/config/colors';
const Cards = ({name, age, image, profession}) => {
  return (
    <View style={styles.cards}>
      <Card style={styles.cards__card}>
        <View>
          <Card.Cover
            style={styles.cards__image}
            source={{
              uri: `${image}`,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            paddingLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cards__image__text__name}>
              {name},<Text> </Text>
            </Text>
            <Text style={styles.cards__image__text__age}>{age}</Text>
          </View>
          <View>
            <Text style={styles.cards__image__text__job}>{profession}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cards: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  cards__card: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
  },
  cards__image: {
    width: '100%',
    height: '90%',
    position: 'relative',
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
