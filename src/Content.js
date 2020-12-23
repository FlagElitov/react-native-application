import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Content = ({ state }) => {
  return (
    <View style={styles.content}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://apod.nasa.gov/apod/image/2012/Trifid_HubbleMehla_1080.jpg",
          }}
        />

        <Text style={styles.title}>
          Name : {state ? state.title : "Нет данных , подождите"}
        </Text>

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
  contentContainer: {
    paddingVertical: 0,
  },
  content: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    paddingBottom: 10,
    flexGrow: 1,
    paddingBottom: 190,
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

  img: {
    height: 300,
    width: 400,
  },
});

export default Content;
