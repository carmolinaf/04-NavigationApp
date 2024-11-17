import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { ReactNode } from 'react';
import { globalStyles } from '../../theme/theme2';

interface Props {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
}

export const CustomView = ( {style, children }: Props) => {
    return (
      <View style={ [ globalStyles.mainContainer, style ]}>
        { children }
      </View>
    )
  }