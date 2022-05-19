import { Platform } from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS
} from 'react-native-permissions';
import { STRINGS } from '../constants';
import { showCustomAlert } from './alert';

export const handleCameraPermission = async (func: any) => {
  const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
  const status = await check(permission);
  if (status === RESULTS.GRANTED) {
    func && func();
  } else if (status === RESULTS.DENIED) {
    await request(permission);
    const updatedStatus = await check(permission);
    if (
      updatedStatus === RESULTS.GRANTED ||
      updatedStatus === RESULTS.LIMITED
    ) {
      func && func();
    }
  } else {
    handleOpenSetting(
      STRINGS.cameraPermissionTitle,
      STRINGS.cameraPermissionDescription,
    );
  }
};

export const handlePhotoLibraryPermission = async (func: any) => {
  if (Platform.OS === 'android') {
    func && func();
  } else {
    const status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (status === RESULTS.GRANTED) {
      func && func();
    } else if (status === RESULTS.DENIED) {
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      const updatedStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (
        updatedStatus === RESULTS.GRANTED ||
        updatedStatus === RESULTS.LIMITED
      ) {
        func && func();
      }
    } else {
      handleOpenSetting(
        STRINGS.cameraPermissionTitle,
        STRINGS.cameraPermissionDescription,
      );
    }
  }
};

const handleOpenSetting = (title: string, message: string) => {
  showCustomAlert(
    title,
    message,
    STRINGS.cancel,
    STRINGS.enableCameraAccess,
    () => openSettings(),
  );
};
