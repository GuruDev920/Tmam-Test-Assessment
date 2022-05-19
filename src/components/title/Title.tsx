import React from 'react';
import {
    StyleSheet, Text, ViewStyle
} from 'react-native';
import { COLORS, DIMENSIONS } from '../../constants';

interface ITitle {
    testID: string;
    name?: string;
    style?: ViewStyle;
}

export const Title = ({
    name = '',
    style,
}: ITitle) => {
    return (
        <Text
            testID={'title'}
            style={[styles.name, style,]}>
            {name}
        </Text>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 35,
        lineHeight: DIMENSIONS.px18,
        fontWeight: '700',
        color: COLORS.black,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 20,
    },
});
