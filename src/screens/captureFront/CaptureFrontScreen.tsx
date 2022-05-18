import { useAppContext } from '@hooks/useApp';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useMemo, useRef } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Camera, TakePhotoOptions, TakeSnapshotOptions, useCameraDevices } from 'react-native-vision-camera';
import { CustomButton, MainContainer, Title } from '../../components';
import { SCREENS, STRINGS } from '../../constants';

export interface ICaptureFrontScreen {
    fileInfo: IUseUploadFile;
}

const CaptureScreen = ({ fileInfo }: ICaptureFrontScreen) => {
    const devices = useCameraDevices('wide-angle-camera');
    const device = devices.front;
    const { navigate, goBack } = useNavigation();
    const { setSelfie } = useAppContext();
    const camera = useRef<Camera>(null);
    const flash = 'on'
    const takePhotoOptions = useMemo<TakePhotoOptions & TakeSnapshotOptions>(
        () => ({
            photoCodec: 'jpeg',
            qualityPrioritization: 'speed',
            flash: flash,
            quality: 90,
            skipMetadata: true,
        }),
        [flash],
    );
    const isFocused = useIsFocused();
    async function takePhoto() {
        try {
            if (camera.current == null) throw new Error('Camera ref is null!');
            console.log('Taking photo...');
            const photo = await camera.current.takePhoto(takePhotoOptions);
            setSelfie(Platform.OS === 'android' ? `file://${photo.path}` : photo.path);
            navigate(SCREENS.PREVIEWFRONT);
        } catch (e) {
            console.error('Failed to take photo!', e);
        }
    }
    
    if (device == null) return null
    return (
        <MainContainer id='capture-front-screen'>
            <Title
                testID='capture-title'
                name={STRINGS.captureSelfie}
            />
            <Camera
                testID='front-camera'
                ref={camera}
                style={styles.camera}
                device={device}
                isActive={isFocused}
                photo={true}
            />
            <CustomButton
                testID='capture-back'
                name={STRINGS.capture}
                onPress={takePhoto}
            />
        </MainContainer>
    )
}

export default CaptureScreen;

const styles = StyleSheet.create({
    camera: {
        flexGrow: 1,
    }
});