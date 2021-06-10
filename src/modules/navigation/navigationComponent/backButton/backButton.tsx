import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export const BackImage = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity onPress={goBack}>
        <Image
          style={styles?.root}
          source={require('../../../../assets/images/backButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
