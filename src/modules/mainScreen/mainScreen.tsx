import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Alert} from 'react-native';
import {styles} from './style';

import {
  getTrackingStatus,
  requestTrackingPermission,
  TrackingStatus,
} from '../../../bridgeFile/index';
import {homeScreenConstants, mainScreenConstants} from '../../assets/constants';

export const MainScreen = props => {
  const {navigation} = props;
  const [trackingStatus, setTrackingStatus] = useState<
    TrackingStatus | '(loading)'
  >('(loading)');

  // getTrackingStatus and setTrackingStatus are native bridge  functions that communicate back and forth with JS engine

  useEffect(() => {
    try {
      getTrackingStatus()
        .then(status => {
          setTrackingStatus(status);
        })
        .catch(e => Alert.alert('Error', e?.toString?.() ?? e));
    } catch (error) {
      console.log(error, trackingStatus);
    }
  });

  // When a user clicks on the proceed button for the first time after the app is installed, a prompt
  // asking for tracking would be asked. The user could either accept or reject the permission.
  // The next time the user clicks on the button no prompt is show

  const onPressProceed = React.useCallback(async () => {
    try {
      const status = await requestTrackingPermission();
      setTrackingStatus(status);
      navigation.navigate(homeScreenConstants.label);
    } catch (e) {
      Alert.alert('Error', e?.toString?.() ?? e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles?.root}>
      <Text style={styles?.greeting} numberOfLines={11}>
        {mainScreenConstants?.introMessage}
      </Text>
      <TouchableOpacity style={styles?.button} onPress={onPressProceed}>
        <Text style={styles?.textStyle}>{mainScreenConstants?.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
