import Axios from 'axios';
import {Platform} from 'react-native';
import {IFile} from '../../models';
import {ENV} from '../../tmam-export';

export const uploadFileService = async (
  file: IFile,
  progressCallback: (progress: number) => void,
) => {
  const formData = new FormData();
  formData.append('file', {
    name: file.name,
    type: file.type,
    uri:
      Platform.OS === 'android' ? file.path : file.path.replace('file://', ''),
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
