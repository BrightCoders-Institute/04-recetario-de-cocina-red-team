import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import recipesData from "../recipes.json";

const Home = () => {
  const filterTrending = recipesData.filter((p) => p.category === 'trending'); 
  const filterRecent = recipesData.filter((p) => p.category === 'recent');
  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>TRENDING</Text>
      <FlatList
        horizontal={true}
        data={filterTrending}
        keyExtractor={(item:any) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Text style={styles.title}>RECENT</Text>
       <FlatList
        horizontal={true}
        data={filterRecent}
        keyExtractor={(item:any) => item.id}
        renderItem={({ item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  search: {
    width: "100%",
    marginBottom: 15,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 17,
  },
  title: {
    fontSize: 30,
    fontWeight: 400,
    color: "#AB1F60",
  },
});

export default Home;

// codigo copiado
/*import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Manzana' },
    { id: 2, name: 'Plátano' },
    { id: 3, name: 'Naranja' },
    { id: 4, name: 'Uva' },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default App;
*/
