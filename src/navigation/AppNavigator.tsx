import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants';
import {COLORS} from '../constants/colors';
import {AppNavigatorParamList} from '../models/navigation';
import {Welcome, Capture, Preview, CaptureFront, PreviewFront, Upload} from '../screens';

const Stack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: COLORS.white,
          },
        }}
        initialRouteName={SCREENS.WELCOME}>
        <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
        <Stack.Screen name={SCREENS.CAPTURE} component={Capture} />
        <Stack.Screen name={SCREENS.PREVIEW} component={Preview} />
        <Stack.Screen name={SCREENS.CAPTUREFRONT} component={CaptureFront} />
        <Stack.Screen name={SCREENS.PREVIEWFRONT} component={PreviewFront} />
        <Stack.Screen name={SCREENS.UPLOAD} component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
