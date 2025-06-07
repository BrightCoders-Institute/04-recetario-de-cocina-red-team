import { View, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";
import TrendingList from "../../components/TrendingList";
import RecentList from "../../components/RecentList";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.card}>
        <TrendingList/>
        <RecentList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  card: {
    justifyContent: "center",
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
