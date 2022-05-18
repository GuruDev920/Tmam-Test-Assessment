import React from 'react';
import PreviewScreen, {IPreviewScreen} from './PreviewScreen';
import { IUseUploadFile, useUploadFile } from '@hooks/useUploadFile';

/*
Here, please do define the contollders && handlers
*/

const PreviewPresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const previewScreenProps: IPreviewScreen = {
    fileInfo,
  };
  return <PreviewScreen {...previewScreenProps} />;
};

export default PreviewPresenter;
