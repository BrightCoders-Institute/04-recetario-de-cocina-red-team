import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import recipesData from "../data/recipes.json"
import RecipeCard from "./recipeCard";

const RecentList = ({query}:{query:string}) => {
  const filterRecent = recipesData.filter((p) => p.category === "RECENT").filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    return(
        <View>
            <Text style={styles.title}>RECENT</Text>
              <FlatList
                horizontal={true}
                data={filterRecent}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => <RecipeCard recipes={item} />}
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
  }
  
});

export default RecentList;
