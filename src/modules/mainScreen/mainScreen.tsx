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
