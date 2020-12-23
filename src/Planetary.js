import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Content from "./Content";
import axios from "axios";

const Planetary = () => {
  const API_KEY = "Bm5oBuVTS8seqOONvgjutNa1Ygr6Vg1XvfXmkk2O";
  const [state, setState] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => setState(res.data));
  }, []);
  return (
    <View style={styles.container}>
      <Content state={state} />
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
export default Planetary;
