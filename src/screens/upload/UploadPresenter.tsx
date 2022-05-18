import React from 'react';
import UploadScreen, {IUploadScreen} from './UploadScreen';
import { IUseUploadFile, useUploadFile } from '@hooks/useUploadFile';

/*
Here, please do define the contollders && handlers
*/

const UploadPresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const uploadScreenProps: IUploadScreen = {
    fileInfo,
  };
  return <UploadScreen {...uploadScreenProps} />;
};

export default UploadPresenter;
