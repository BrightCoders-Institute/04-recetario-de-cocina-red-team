import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Recipes} from "../types/recipes"
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getImage } from "../utils/getImage";


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
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#C4E1E6'
  },
  images: {
    width:120,
    height: 100,
    marginVertical:10,
    borderRadius: 10
  }
});
  return(
    <TouchableOpacity style={styles.button}
    onPress={handleDetailPress}>
        <Image source={getImage(recipes.image)} style={styles.images}/>
        <Text>{recipes.name}</Text>
    </TouchableOpacity>
  );

}
 