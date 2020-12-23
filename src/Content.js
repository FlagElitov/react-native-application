import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Content = ({ state }) => {
  return (
    <View style={styles.content}>
      <ScrollView>
        <Image
          style={styles.img}
          source={{
            uri: state && state.hdurl,
          }}
        />

        <Text style={styles.title}>Name : {state && state.title}</Text>

        <Text style={styles.text}>Date : {state && state.date}</Text>
        <Text style={styles.text}>
          Service_version : {state && state.service_version}
        </Text>
        <Text style={styles.text}>{state && state.explanation}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 19,
    width: 330,
  },
  text: {
    fontSize: 17,
    marginTop: 7,
    width: 330,
  },
  scroll: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 400,
  },
});

export default Content;
