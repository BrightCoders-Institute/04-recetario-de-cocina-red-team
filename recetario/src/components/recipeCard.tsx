import React from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
type Recipes = {
  id: string;
  name: string;
  image: string;
  category: string;
  servings: number;
  ingredients: { name: string; quantity: string }[];
};

// const [modalVisible, setModalVisible] = React.useState(false);
// <TouchableOpacity onPress={() => setModalVisible(true)}>
//        <Text>Abrir Ventana Emergente</Text>
//    </TouchableOpacity>

export default function recipeCard({ recipes }: { recipes: Recipes }) {
  const navigation = useNavigation();

  const handleDetailPress = () => {
    navigation.navigate("Details", { recipes });
  };

  return();
}
 