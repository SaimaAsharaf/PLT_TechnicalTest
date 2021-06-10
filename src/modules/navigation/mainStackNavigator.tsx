import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../mainScreen/mainScreen';
import {HomeScreen} from '../homeScreen/home';
import {homeScreenConstants, mainScreenConstants} from '../../assets/constants';
import {BackImage} from './navigationComponent/backButton/backButton';

// All the Stacks are arranged inside NavigationContainer

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={mainScreenConstants?.label}
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={homeScreenConstants?.label}
          component={HomeScreen}
          options={{
            headerLeft: () => <BackImage />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
