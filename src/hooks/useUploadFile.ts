import { useState } from 'react';
import { STRINGS } from '../constants';
import { uploadFileService } from '../data/services';
import { showAlert } from '../utils/alert';
import { useAppContext } from './useApp';

export interface IUseUploadFile {
  progress: number;
  uploading: boolean;
 
  uploadFile: () => void;
}
export const useUploadFile = (): IUseUploadFile => {

  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const {photo, selfie} = useAppContext();
  
  const uploadFile = async () => {
    if (!photo||!selfie) {
      return;
    }
    try {
      setProgress(0);
      setUploading(true);
      await uploadFileService(photo, selfie,  status => {
        setProgress(status);
      });
      setTimeout(() => {
        setUploading(false);
        showAlert(
          STRINGS.ok,
          STRINGS.fileUploadingSuccess,
          STRINGS.uploadingSuccessMsg,
        );
      }, 200);
    } catch (error) {
      showAlert(STRINGS.ok, STRINGS.fileUploadingFailed, STRINGS.error);
    }
  };

  return {
    progress,
    uploading,
    uploadFile,
  };
};
