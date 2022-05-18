import { useAppContext } from '@hooks/useApp';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ArrowButton, MainContainer, Title } from '../../components';
import { SCREENS, STRINGS } from '../../constants';

export interface IPreviewScreen {
    fileInfo: IUseUploadFile;
}

const PreviewScreen = ({ fileInfo }: IPreviewScreen) => {
    const { navigate, goBack } = useNavigation();
    const { photo } = useAppContext();
    return (
        <MainContainer id='preview-screen'>
            <Title
                testID='preview-title'
                name={STRINGS.preview}
            />
            <Image
                testID='preview-image'
                source={{ uri:photo }}
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
                        navigate(SCREENS.CAPTUREFRONT);
                    }}
                />
            </View>
        </MainContainer>
    )
}

export default PreviewScreen;

const styles = StyleSheet.create({
    image: {
        flexGrow:1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});