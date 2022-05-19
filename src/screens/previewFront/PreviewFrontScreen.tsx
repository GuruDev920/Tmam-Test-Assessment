import { useAppContext } from '@hooks/useApp';
import { useAppNavigation } from '@navigation/AppNavigator';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ArrowButton, MainContainer, Title } from '../../components';
import { SCREENS, STRINGS } from '../../constants';

const PreviewFrontScreen = () => {
    const { navigate, goBack } = useAppNavigation();
    const { selfie } = useAppContext();
    return (
        <MainContainer id='preview-screen'>
            <Title
                testID='preview-title'
                name={STRINGS.preview}
            />
            <Image
                testID='preview-image-front'
                source={{ uri: selfie }}
                style={styles.image}
            />
            <View
                testID='preview-buttons'
                style={styles.buttons}
            >
                <ArrowButton
                    testID='preview-back'
                    back={true}
                    onPress={() => {
                        goBack()
                    }}
                />
                <ArrowButton
                    testID='preview-next'
                    back={false}
                    onPress={() => {
                        navigate(SCREENS.UPLOAD)
                    }}
                />
            </View>
        </MainContainer>
    )
}

export default PreviewFrontScreen;

const styles = StyleSheet.create({
    image: {
        flexGrow: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});