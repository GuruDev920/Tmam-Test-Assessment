import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { CustomButton, Title } from '../../components';
import { STRINGS, SCREENS } from '../../constants';
import { Camera } from 'react-native-vision-camera';

const WelcomeScreen = () => {
    const { navigate, goBack } = useNavigation()
    return (
        <SafeAreaView testID='welcome-screen' style={styles.container}>
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
        </SafeAreaView>
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