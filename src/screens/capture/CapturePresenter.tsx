import React from 'react';
import CaptureScreen, {ICaptureScreen} from './CaptureScreen';
import { IUseUploadFile, useUploadFile } from '@hooks/useUploadFile';

/*
Here, please do define the contollders && handlers
*/

const CapturePresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const captureScreenProps: ICaptureScreen = {
    fileInfo,
  };
  return <CaptureScreen {...captureScreenProps} />;
};

export default CapturePresenter;
