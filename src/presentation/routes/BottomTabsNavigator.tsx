import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IonIcon } from "../components/shared/IonIcon";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { StackNavigator } from "./StackNavigator";
import { TopTabsNavigator } from "./TopTabsNavigator";
import { SwitchScreen } from "../screens/switches/SwitchScreen";
import Tab2Screen from "../screens/tabs/Tab2Screen";
import Tab3Screen from "../screens/tabs/Tab3Screen";
import Tab4Screen from "../screens/tabs/Tab4Screen";
import Tab5Screen from "../screens/tabs/Tab5Screen";
import Tab6Screen from "../screens/tabs/Tab6Screen";


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
        component={ Tab2Screen } />

      <Tab.Screen 
        name="Tab3" 
        options={{ title:'Registro', tabBarIcon: ({ color }) => ( <IonIcon name="clipboard-outline" color={ color } /> ) }} 
        component={ Tab3Screen } />

      <Tab.Screen 
        name="Tab4" 
        options={{ title:'Perfil', tabBarIcon: ({ color }) => ( <IonIcon name="person-outline" color={ color } /> ) }} 
        component={ Tab4Screen } />

        <Tab.Screen 
        name="Tab5" 
        options={{ title:'Configuración', tabBarIcon: ({ color }) => ( <IonIcon name="cog-outline" color={ color } /> ) }} 
        component={ Tab6Screen } />

    </Tab.Navigator>
  );
};