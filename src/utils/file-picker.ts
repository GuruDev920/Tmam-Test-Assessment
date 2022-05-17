import { launchImageLibrary } from 'react-native-image-picker';
export const pickFile = () => {
  return new Promise((resolve, reject) => {
    launchImageLibrary({ mediaType: 'mixed' })
      .then((response) => {
        if (response.assets && response.assets.length > 0) {
          const file = response.assets[0]
          resolve({
            name: file.fileName,
            size: file.fileSize,
            path: file.uri,
            type: file.type,
          });
        } else {
          reject();
        }
      })
      .catch(e => {
        reject(e);
      });
  });
};
