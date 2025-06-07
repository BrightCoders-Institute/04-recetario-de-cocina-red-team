import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import TrendingList from "../../components/TrendingList";
import RecentList from "../../components/RecentList";

const Home = () => {
  const [query,setQuery] = useState("");
  return (
    <View style={styles.container}>
      <SearchBar onSearch={setQuery}/>
      <View style={styles.card}>
        <TrendingList query={query}/>
        <RecentList query={query}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#292929",
  },
  card: {
    justifyContent: "center",
  },
});

export default Home;

