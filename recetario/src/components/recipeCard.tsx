import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Recipes} from "../types/recipes"
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export default function recipeCard({recipes} : {recipes:Recipes}) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDetailPress = () => {
    navigation.navigate("Details", {recipes})
  };

  return(
    <TouchableOpacity 
    onPress={handleDetailPress}
    />
  );
}
 