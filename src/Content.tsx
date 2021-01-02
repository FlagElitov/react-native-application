import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { PlanetaryData } from "./Planetary";

const Content: React.FC<PlanetaryData> = ({
  url,
  title,
  date,
  service_version,
  explanation,
}) => {
  return (
    <View style={styles.content}>
      <ScrollView>
        <Image
          style={styles.img}
          source={{
            uri: url ? url : "Sorry",
          }}
        />

        <Text style={styles.title}>Name : {title}</Text>

        <Text style={styles.text}>Date : {date}</Text>
        <Text style={styles.text}>Service_version : {service_version}</Text>
        <Text style={styles.text}>{explanation}</Text>
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
