import React from 'react';
import HomeScreen, {IHomeScreen} from './HomeScreen';
import {IUseUploadFile, useUploadFile} from '../../hooks';
/*
Here, please do define the contollers && handlers
*/

const HomePresenter = () => {
  const fileInfo: IUseUploadFile = useUploadFile();
  const homeScreenProps: IHomeScreen = {
    fileInfo,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
