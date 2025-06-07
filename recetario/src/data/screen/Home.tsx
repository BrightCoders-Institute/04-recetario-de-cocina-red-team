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
    backgroundColor: "#292929",
  },
  card: {
    justifyContent: "center",
  },
});

export default Home;

