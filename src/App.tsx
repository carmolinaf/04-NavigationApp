
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator'


export const App = () => {
    return (
      <NavigationContainer>

        <BottomTabNavigator />        


      </NavigationContainer>
    )
  }