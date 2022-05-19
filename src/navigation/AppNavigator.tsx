import { AppContext, useApp } from '@hooks/useApp';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import { COLORS } from '../constants/colors';
import { AppNavigatorParamList } from '../models/navigation';
import { Capture, CaptureFront, Preview, PreviewFront, Upload, Welcome } from '../screens';

const Stack = createStackNavigator<AppNavigatorParamList>();
export const useAppNavigation=()=>useNavigation<StackNavigationProp<AppNavigatorParamList>>();

export const AppNavigator = () => {
  const data = useApp();
  return (
    <NavigationContainer>
      <AppContext.Provider value={data}>
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
      </AppContext.Provider>
    </NavigationContainer>
  );
};
