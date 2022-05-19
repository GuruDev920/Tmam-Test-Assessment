import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import BackIcon from '../../assets/back.svg';
import NextIcon from '../../assets/next.svg';
import {COLORS} from '../../constants';

const buttonHeight = 56;
const shrinkDistance = 4;

interface IArrowButton {
  testID: string;
  onPress: () => void;
  style?: ViewStyle;
  back?: boolean;
}

export const ArrowButton = ({onPress, style, back = false}: IArrowButton) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      testID={'arrow-button'}
      style={[
        styles.container,
        style,
        {padding: (pressed && shrinkDistance) || 0},
      ]}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}
      activeOpacity={1}
      onPress={() => {
        onPress();
      }}>
      <View style={styles.button}>{back ? <BackIcon /> : <NextIcon />}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: buttonHeight,
    marginVertical: 24,
    width: 80,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
  },
});
