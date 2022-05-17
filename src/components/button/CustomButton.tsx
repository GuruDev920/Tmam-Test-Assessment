import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {COLORS, DIMENSIONS} from '../../constants';

const buttonWidth = DIMENSIONS.width - 48;
const buttonHeight = 56;
const shrinkDistance = 4;

interface ICustomButton {
  testID:string;
  onPress: () => void;
  name?: string;
  style?: ViewStyle;
  width?: number;
  disabled?: boolean;
}

export const CustomButton = ({
  name = 'Continue',
  onPress,
  style,
  width = buttonWidth,
  disabled = false,
}: ICustomButton) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      testID={'custom-button'}
      style={[
        styles.container,
        style,
        {width, padding: (pressed && shrinkDistance) || 0},
      ]}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}
      activeOpacity={1}
      disabled={disabled}
      onPress={() => {
        onPress();
      }}>
      <View
        style={[
          styles.button,
          {backgroundColor: disabled ? COLORS.grey : COLORS.secondary},
        ]}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: buttonHeight,
    marginVertical: 24,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonHeight / 2,
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
});
