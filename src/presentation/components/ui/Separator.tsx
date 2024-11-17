import { StyleProp, Text, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>;
}
export const Separator = ({style }: Props) => {
    return (
      <View
      style={[
        {
            alignSelf: 'center',
            width: '100%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical:8
        },
        style
      ]}
      />
    )
  }
