import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IFileInfoItem {
  label?: string;
  value?: string | number;
}

export const FileInfoItem = ({label, value}: IFileInfoItem) => {
  return (
    <View testID={label} style={styles.container}>
      <Text style={styles.label}>{label}: </Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  label: {
    fontWeight: 'bold',
    width: 55,
  },
  value: {},
});
