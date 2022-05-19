import { useAppContext } from '@hooks/useApp';
import { useAppNavigation } from '@navigation/AppNavigator';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Camera, TakePhotoOptions, TakeSnapshotOptions, useCameraDevices } from 'react-native-vision-camera';
import { CustomButton, MainContainer, Title } from '../../components';
import { SCREENS, STRINGS } from '../../constants';

const CaptureScreen = () => {
    const devices = useCameraDevices('wide-angle-camera');
    const device = devices.back;
    const { navigate } = useAppNavigation();
    const { setPhoto } = useAppContext();
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
            console.log({ photo })
            setPhoto(Platform.OS === 'android' ? `file://${photo.path}` : photo.path);
            navigate(SCREENS.PREVIEW);
        } catch (e) {
            console.error('Failed to take photo!', e);
        }
    }

    useEffect(() => {
        const requestCameraPermission = async () => {
            await Camera.requestCameraPermission()
        }
        const checkCameraPermission = async () => {
            await Camera.getCameraPermissionStatus().then((status) => {
                if (status == 'authorized') {
                    requestCameraPermission()
                }
            })
        }
        checkCameraPermission();
    }, [])

    if (device == null) return null
    return (
        <MainContainer id='capture-screen'>
            <Title
                testID='capture-title'
                name={STRINGS.captureId}
            />
            <Camera
                testID='back-camera'
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
    container: {
        flexGrow: 1
    },
    camera: {
        flexGrow: 1,
    }
});