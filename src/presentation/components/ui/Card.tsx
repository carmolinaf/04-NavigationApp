import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { Children, PropsWithChildren } from 'react';
import { colors } from '../../theme/theme2';


interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}
export const  Card = ({style, children}: Props) => {
    return (
      <View style={[
        {
            backgroundColor: colors.cardBackground,
            borderRadius: 10,
            padding: 10
        },
        style,
      ]}>
        { children }
      </View>
    )
  }
