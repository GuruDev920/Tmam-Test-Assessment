import {useState} from 'react';
import {STRINGS} from '../constants';
import { uploadFileService } from '../data/services';
import {IFile} from '../models';
import {showAlert} from '../utils/alert';
import {pickFile} from '../utils/file-picker';
import {handlePhotoLibraryPermission} from '../utils/permission';

export interface IUseUploadFile {
  file: IFile | undefined;
  progress: number;
  uploading: boolean;
  pickFileFromLibrary: () => void;
  uploadFile: () => void;
}
export const useUploadFile = (): IUseUploadFile => {
  const [file, setFile] = useState<IFile | undefined>();
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const pickFileFromLibrary = () => {
    handlePhotoLibraryPermission(async () => {
      const response: any = await pickFile();
      setFile(response);
    });
  };

  const uploadFile = async () => {
    if (!file) {
      return;
    }
    try {
      setProgress(0);
      setUploading(true);
      await uploadFileService(file, status => {
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
    file,
    progress,
    uploading,
    pickFileFromLibrary,
    uploadFile,
  };
};
