import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Navbar";

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar title="Flagchik" />
      <Text style={styles.text}>Hello Android!</Text>
      <Text style={styles.text}>Flagelitovf!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 23,
    color: "#000",
  },
});
export default App;
