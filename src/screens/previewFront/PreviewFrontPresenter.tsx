import React from 'react';
import PreviewFrontScreen, {IPreviewFrontScreen} from './PreviewFrontScreen';
import { IUseUploadFile, useUploadFile } from '@hooks/useUploadFile';

/*
Here, please do define the contollders && handlers
*/

const PreviewFrontPresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const previewFrontScreenProps: IPreviewFrontScreen = {
    fileInfo,
  };
  return <PreviewFrontScreen {...previewFrontScreenProps} />;
};

export default PreviewFrontPresenter;
