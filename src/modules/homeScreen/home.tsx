import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {homeScreenConstants} from '../../assets/constants';

export const HomeScreen = () => {
  return (
    <View style={styles?.root}>
      <Text style={styles?.introStyle}>{homeScreenConstants?.message}</Text>
    </View>
  );
};
