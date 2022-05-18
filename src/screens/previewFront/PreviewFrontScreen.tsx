import React, { useEffect, useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, Image } from 'react-native';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { ArrowButton, Title, MainContainer } from '../../components';
import { STRINGS, COLORS, SCREENS } from '../../constants';
import { useAppContext } from '@hooks/useApp';
import { useAppNavigation } from '@navigation/AppNavigator';

export interface IPreviewFrontScreen {
    fileInfo: IUseUploadFile;
}

const PreviewFrontScreen = ({ fileInfo }: IPreviewFrontScreen) => {
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
                source={{ uri:selfie }}
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