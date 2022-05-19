import { useUploadFile } from '@hooks/useUploadFile';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle } from 'react-native-progress';
import { CustomButton, MainContainer, Title } from '../../components';
import { STRINGS } from '../../constants';

const UploadScreen = () => {
    const {progress, uploading, uploadFile}= useUploadFile();
    return (
        <MainContainer id='upload-screen'>
            <Title
                testID='upload-title'
                name={STRINGS.upload}
            />
            <View
                style={styles.progress}
            >
                <Circle
                    progress={progress}
                    size={100}
                    showsText
                    formatText={status => `${(status * 100).toFixed(0)} %`}
                />
            </View>
            <CustomButton
                testID='upload'
                name={progress == 1 ? STRINGS.done : STRINGS.upload}
                disabled={progress > 0}
                onPress={() => {
                    uploadFile();
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
});