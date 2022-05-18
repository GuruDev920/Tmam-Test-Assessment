import React, { useEffect, useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { IUseUploadFile } from '@hooks/useUploadFile';
import { CustomButton, Title, MainContainer } from '../../components';
import { Camera, useCameraDevices, TakePhotoOptions, TakeSnapshotOptions } from 'react-native-vision-camera';
import { STRINGS, COLORS, SCREENS } from '../../constants';

export interface ICaptureScreen {
    fileInfo: IUseUploadFile;
}

const CaptureScreen = ({ fileInfo }: ICaptureScreen) => {
    const devices = useCameraDevices('wide-angle-camera');
    const device = devices.front;
    const { navigate, goBack } = useNavigation();
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

    async function takePhoto() {
        try {
            if (camera.current == null) throw new Error('Camera ref is null!');
            console.log('Taking photo...');
            const photo = await camera.current.takePhoto(takePhotoOptions);
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
                isActive={true}
            />
            <CustomButton
                testID='next'
                name={STRINGS.next}
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