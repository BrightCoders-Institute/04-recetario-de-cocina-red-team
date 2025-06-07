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
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#292929"
  },
  images: {
    width:120,
    height: 100,
    marginVertical:10,
    borderRadius: 10
  },
   cardText: {
    color: "white",
    textAlign: "left",
  },
  largeImage: {
    width: 200,
    height:250,
  },
  largeButton: {
    width: 200,
    height:300,
  }


});
  const imageStyle = recipes.category === "recent" ? [styles.images,styles.largeImage] : styles.images;
  const buttonStyle = recipes.category === "recent" ? [styles.button,styles.largeButton] : styles.button;
  return(
    <TouchableOpacity style={buttonStyle}
    onPress={handleDetailPress}>
        <Image source={getImage(recipes.image)} style={imageStyle}/>
        <Text style={styles.cardText}>{recipes.name}</Text>
    </TouchableOpacity>
  );

}
 