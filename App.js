import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatergoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CatergoriesScreen}/>
          <Stack.Screen name="MealsOverviewScreen" component={MealsOverViewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
