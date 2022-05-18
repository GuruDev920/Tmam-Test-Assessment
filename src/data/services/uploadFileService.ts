import Axios from 'axios';
import {Platform} from 'react-native';
import {IFile} from '../../models';
import {ENV} from '../../tmam-export';

export const uploadFileService = async (
  photo: string,
  selfie:string,
  progressCallback: (progress: number) => void,
) => {
  const formData = new FormData();
  formData.append('file', {
    name: 'photo',
    type: 'image/png',
    uri:
      Platform.OS === 'android' ? photo : photo.replace('file://', ''),
  });
  formData.append('selfie', {
    name: 'photo',
    type: 'image/png',
    uri:
      Platform.OS === 'android' ? selfie : selfie.replace('file://', ''),
  });
  const response = await Axios.post(`${ENV.API_URL}/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    onUploadProgress: status => {
      progressCallback(status.loaded / status.total);
    },
  });
  return response;
};
