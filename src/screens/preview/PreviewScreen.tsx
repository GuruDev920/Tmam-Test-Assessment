import React, { useEffect, useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { ArrowButton, Title, MainContainer } from '../../components';
import { STRINGS, COLORS, SCREENS } from '../../constants';

export interface IPreviewScreen {
    fileInfo: IUseUploadFile;
}

const PreviewScreen = ({ fileInfo }: IPreviewScreen) => {
    const { navigate, goBack } = useNavigation();
    return (
        <MainContainer id='preview-screen'>
            <Title
                testID='preview-title'
                name={STRINGS.preview}
            />
            <View
                testID='preview-image'
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
                        
                    }}
                />
            </View>
        </MainContainer>
    )
}

export default PreviewScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    image: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});