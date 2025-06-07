import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { getImage } from "../utils/getImage";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsList = () => {
  const route = useRoute<DetailsRouteProp>();
  const { recipes } = route.params;

  return (
    <View style={styles.container}>
      <Image source={getImage(recipes.image)} style={styles.backgroundImage} />
      <Text style={styles.categoryText}>{recipes.category}</Text>
      <Text style={styles.nameText}>{recipes.name}</Text>
      <Text style={styles.ingredientsText}>Ingredients</Text>
      <Text style={styles.servingsText}>for {recipes.servings} servings</Text>
       <FlatList
                data={recipes.ingredients}
                keyExtractor={(item,index) =>index.toString()}
                renderItem={({ item }) => (
                <View style={styles.containFlat}>
                    <Text style={styles.ingredients}> {item.name} </Text>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                </View>
                )}
        />
    </View>
  );
};
export default DetailsList;


const styles = StyleSheet.create({
   container: {
    backgroundColor: "#292929",
    flex: 1,
  },

  backgroundImage: {
    resizeMode: "cover",
    opacity: 0.5,
    height: "50%",
    width: "100%",
  },
  categoryText:{
    position: "absolute",
    color: "white",
    top: 350,
    left: 20,
    fontSize: 20,
  },
  nameText:{
    position: "absolute",
    color: "white",
    fontSize: 30,
    top:350,
    padding: 20,
  },
  containFlat:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#343435",
    margin: 20,
    marginBottom: 5
  },
  ingredients: {
    marginBottom: 10,
    color: "white",
    textAlign:"center"
  },
  quantity:{
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    textAlign: "center",


  },

  ingredientsText:{
    fontSize: 20,
    color: "white",
    padding: 10,
    marginLeft: 10
  },
  servingsText:{
    fontSize: 16,
    color:"white",
    marginLeft: 20,
  }

});
