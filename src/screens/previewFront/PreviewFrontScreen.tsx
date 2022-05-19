import {useAppContext} from '@hooks/useApp';
import {useAppNavigation} from '@navigation/AppNavigator';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ArrowButton, MainContainer, Title} from '../../components';
import {SCREENS, STRINGS} from '../../constants';

const PreviewFrontScreen = () => {
  const {navigate, goBack} = useAppNavigation();
  const {selfie} = useAppContext();
  return (
    <MainContainer id="preview-front-screen">
      <Title testID="preview-front-title" name={STRINGS.preview} />
      <Image
        testID="preview-image-front"
        source={{uri: selfie}}
        style={styles.image}
      />
      <View testID="preview-front-buttons" style={styles.buttons}>
        <ArrowButton
          testID="preview-front-back"
          back={true}
          onPress={() => {
            goBack();
          }}
        />
        <ArrowButton
          testID="preview-front-next"
          back={false}
          onPress={() => {
            navigate(SCREENS.UPLOAD);
          }}
        />
      </View>
    </MainContainer>
  );
};

export default PreviewFrontScreen;

const styles = StyleSheet.create({
  image: {
    flexGrow: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
