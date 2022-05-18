import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { MainContainer, CustomButton, Title } from '../../components';
import { STRINGS, SCREENS } from '../../constants';
import { Camera } from 'react-native-vision-camera';
import { useAppNavigation } from '@navigation/AppNavigator';

const WelcomeScreen = () => {
    const { navigate, goBack } = useAppNavigation()
    return (
        <MainContainer id='welcome-screen'>
            <Title
                testID='welcome-title'
                name={STRINGS.welcome}
                style={styles.title}
            />
            <CustomButton
                testID='start'
                name={STRINGS.start}
                onPress={() => {
                    const requestCameraPermission = async () => {
                        await Camera.requestCameraPermission()
                    }
                    requestCameraPermission()
                    navigate(SCREENS.CAPTURE)
                }}
            />
        </MainContainer>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        textAlignVertical: 'center',
    },
});