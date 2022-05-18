import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { MainContainer, CustomButton, Title } from '../../components';
import { STRINGS, SCREENS } from '../../constants';
import { Circle } from 'react-native-progress';

export interface IUploadScreen {
    fileInfo: IUseUploadFile;
}

const UploadScreen = ({ fileInfo }: IUploadScreen) => {
    const { navigate, goBack } = useNavigation()
    return (
        <MainContainer id='upload-screen'>
            <Title
                testID='upload-title'
                name={STRINGS.upload}
                style={styles.title}
            />
            <View
                style={styles.progress}
            >
                <Circle
                    progress={fileInfo.progress}
                    size={100}
                    showsText
                    formatText={status => `${(status * 100).toFixed(0)} %`}
                />
            </View>
            <CustomButton
                testID='done'
                name={fileInfo.uploading ? STRINGS.upload : STRINGS.done}
                onPress={() => {

                }}
            />
        </MainContainer>
    )
}

export default UploadScreen;

const styles = StyleSheet.create({
    progress: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlignVertical: 'center',
    },
});