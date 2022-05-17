import {Alert} from 'react-native';

export const showAlert = (
  confirmText: string,
  title: string,
  message: string,
  onPress = () => {},
) =>
  Alert.alert(title, message, [{text: confirmText, onPress: onPress || null}], {
    cancelable: true,
  });

export const showCustomAlert = (
  title: string,
  message: string,
  cancelText: string,
  confirmText: string,
  onConfirm: () => void,
  onCancel?: () => void,
) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        style: 'cancel',
        onPress: () => {
          onCancel && onCancel();
        },
      },
      {text: confirmText, onPress: onConfirm || null},
    ],
    {cancelable: false},
  );
