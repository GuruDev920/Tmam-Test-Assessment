import {useAppNavigation} from '@navigation/AppNavigator';
import {handleCameraPermission} from '@utils/permission';
import React from 'react';
import {StyleSheet} from 'react-native';
import {CustomButton, MainContainer, Title} from '../../components';
import {SCREENS, STRINGS} from '../../constants';

const WelcomeScreen = () => {
  const {navigate} = useAppNavigation();
  return (
    <MainContainer id="welcome-screen">
      <Title
        testID="welcome-title"
        name={STRINGS.welcome}
        style={styles.title}
      />
      <CustomButton
        testID="start"
        name={STRINGS.start}
        onPress={() => {
          handleCameraPermission(() => {
            navigate(SCREENS.CAPTURE);
          });
        }}
      />
    </MainContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlignVertical: 'center',
  },
});
