import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants';
import {COLORS} from '../constants/colors';
import {AppNavigatorParamList} from '../models/navigation';
import {Welcome, Capture, Home} from '../screens';

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
        <Stack.Screen name={SCREENS.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
