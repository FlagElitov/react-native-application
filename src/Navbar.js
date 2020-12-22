import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 75,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
});

export default Navbar;
