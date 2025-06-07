import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import recipesData from "../data/recipes.json"
import RecipeCard from "./recipeCard";

const TrendingList = ({query}:{query:string}) => {

    const filterTrending = recipesData.filter((p) => p.category === "TRENDING").filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

    return(
        <View>
            <Text style={styles.title}>TRENDING</Text>
            <FlatList
                horizontal={true}
                data={filterTrending}
                keyExtractor={(item: any) => item.id}
                
                renderItem ={({ item }) => <RecipeCard recipes={item}/>}
        />
        </View>
    );
};
const styles = StyleSheet.create({
  
  title: {
    fontSize: 30,
    fontWeight: 400,
    color: "#AB1F60",
    marginVertical: 20,
  },

});

export default TrendingList;
