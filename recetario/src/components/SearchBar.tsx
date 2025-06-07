import { View, TextInput, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
  
const SearchBar = () => {
    return (
        <View style={styles.search}>
        <Ionicons name="search" size={17} color="black"></Ionicons>
        <TextInput
          style={styles.input}
          placeholder="What do you want to eat?"
          //onChangeText={handleSearchTextChange}
          //value={searchText}
        />
        <Ionicons name="mic" size={20} color="black"></Ionicons>
      </View>
    );
}

const styles = StyleSheet.create({
  search: {
    width: "100%",
    marginBottom: 15,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 17,
  }
});

export default SearchBar;
  