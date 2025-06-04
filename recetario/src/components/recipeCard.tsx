import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Recipes} from "../types/recipes"
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export default function RecipeCard({recipes} : {recipes:Recipes}) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDetailPress = () => {
    navigation.navigate("Details", {recipes})
  };

  const styles = StyleSheet.create({
    button: {
    width: 150,
    height: 150,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
  return(
    <TouchableOpacity style={styles.button}
    onPress={handleDetailPress}>
        <Text>{recipes.name}</Text>
    </TouchableOpacity>

    
  );

}
 