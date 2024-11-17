import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IonIcon } from "../components/shared/IonIcon";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { StackNavigator } from "./StackNavigator";
import { TopTabsNavigator } from "./TopTabsNavigator";
import { SwitchScreen } from "../screens/switches/SwitchScreen";


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen 
        name="Tab1" 
        options={{ title:'Inicio', tabBarIcon: ({ color }) => ( <IonIcon name="home-outline" color={ color } /> ) }} 
        component={ Tab1Screen } />

      <Tab.Screen 
        name="Tab2" 
        options={{ title:'Test', tabBarIcon: ({ color }) => ( <IonIcon name="add-outline" color={ color } /> ) }} 
        component={ TopTabsNavigator } />

      <Tab.Screen 
        name="Tab3" 
        options={{ title:'Registro', tabBarIcon: ({ color }) => ( <IonIcon name="clipboard-outline" color={ color } /> ) }} 
        component={ StackNavigator } />

      <Tab.Screen 
        name="Tab4" 
        options={{ title:'Perfil', tabBarIcon: ({ color }) => ( <IonIcon name="person-outline" color={ color } /> ) }} 
        component={ SwitchScreen } />

        <Tab.Screen 
        name="Tab5" 
        options={{ title:'Configuración', tabBarIcon: ({ color }) => ( <IonIcon name="cog-outline" color={ color } /> ) }} 
        component={ Tab1Screen } />

    </Tab.Navigator>
  );
};