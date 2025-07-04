import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../data/screen/Home";
import Details from "../data/screen/Details";
import { Recipes } from "../types/recipes";

export type RootStackParamList = {
  Home: undefined;
  Details: { recipes: Recipes };
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
