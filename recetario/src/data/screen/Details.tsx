import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { getImage } from "../../utils/getImage";
type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const Details = () => {
  const route = useRoute<DetailsRouteProp>();
  const { recipes } = route.params;

  return (
    <View style={styles.container}>
      <Image source={getImage(recipes.image)} style={styles.backgroundImage} />
      <Text>{recipes.category}</Text>
      <Text>{recipes.name}</Text>
      <Text>Ingredients</Text>
      <Text>for {recipes.servings} servings</Text>
       <FlatList
                data={recipes.ingredients}
                keyExtractor={(item,index) =>index.toString()}
                renderItem={({ item }) => (<Text style={styles.ingredients}> {item.name} {item.quantity}</Text>)}
                />
    </View>
  );
};
export default Details;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393E46",
    flex: 1,
    // flexDirection: "column",
  },

  backgroundImage: {
    // objectFit: "contain",
    resizeMode: "cover",
    // width: "50%",
    opacity: 0.5,
    height: "50%",
    width: "100%",
    // height: "100%",
  },

  ingredients: {
    marginBottom: 10,
  }

});
