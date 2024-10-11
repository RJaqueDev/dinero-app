import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importacion de Screens
import { InicioScreen } from "../screens/InicioScreen";
import { AjustesScreen } from "../screens/AjustesScreen";


const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={InicioScreen}/>
                <Tab.Screen name="Ajustes" component={AjustesScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export {TabNavigation}