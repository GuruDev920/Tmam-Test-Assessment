import React from 'react';
import CaptureFrontScreen, {ICaptureFrontScreen} from './CaptureFrontScreen';
import { IUseUploadFile, useUploadFile } from '@hooks/useUploadFile';

/*
Here, please do define the contollders && handlers
*/

const CapturePresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const captureFrontScreenProps: ICaptureFrontScreen = {
    fileInfo,
  };
  return <CaptureFrontScreen {...captureFrontScreenProps} />;
};

export default CapturePresenter;
