import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CustomButton} from '../../components';
import {STRINGS} from '../../constants';
import {IUseUploadFile} from '../../hooks';
import {FileInfoItem} from './components';
import {Circle} from 'react-native-progress';
export interface IHomeScreen {
  fileInfo: IUseUploadFile;
}

const HomeScreen = ({fileInfo}: IHomeScreen) => {
  return (
    <SafeAreaView testID='home-screen'>
      <View style={styles.fileInformation}>
        {fileInfo && fileInfo.file && (
          <View>
            <FileInfoItem label="Name" value={fileInfo.file.name} />
            <FileInfoItem label="Path" value={fileInfo.file.path} />
            <FileInfoItem label="Size" value={fileInfo.file.size} />
          </View>
        )}
      </View>
      <CustomButton
        testID='select-file'
        name={STRINGS.selectFile}
        onPress={() => {
          fileInfo.pickFileFromLibrary();
        }}
      />
      <View style={styles.progress}>
        {fileInfo.uploading && (
          <Circle
            progress={fileInfo.progress}
            size={100}
            showsText
            formatText={status => `${(status * 100).toFixed(0)} %`}
          />
        )}
      </View>
      <CustomButton
        testID='upload-selected-file'
        name={STRINGS.uploadSelectedFile}
        disabled={!fileInfo.file}
        onPress={() => {
          fileInfo.uploadFile();
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fileInformation: {
    minHeight: 100,
    marginTop: 100,
    paddingHorizontal: 24,
  },
  progress: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
