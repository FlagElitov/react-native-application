import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Content = ({ state }) => {
  return (
    <View style={styles.content}>
      <ScrollView>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://apod.nasa.gov/apod/image/2012/Trifid_HubbleMehla_1080.jpg",
          }}
        />

        <Text style={styles.title}>
          Name : {state ? state.title : "Trifid Pillars and Jets"}
        </Text>

        <Text style={styles.text}>
          Date : {state ? state.date : "2020-12-22"}
        </Text>
        <Text style={styles.text}>
          Service_version : {state ? state.service_version : "v1"}
        </Text>
        <Text style={styles.text}>
          {state
            ? state.explanation
            : "Dust pillars are like interstellar mountains. They survive because they are more dense than their surroundings, but they are being slowly eroded away by a hostile environment. Visible in the featured picture is the end of a huge gas and dust pillar in the Trifid Nebula (M20), punctuated by a smaller pillar pointing up and an unusual jet pointing to the left. Many of the dots are newly formed low-mass stars. A star near the small pillar's end is slowly being stripped of its accreting gas by radiation from a tremendously brighter star situated off the top of the image. The jet extends nearly a light-year and would not be visible without external illumination. As gas and dust evaporate from the pillars, the hidden stellar source of this jet will likely be uncovered, possibly over the next 20,000 years. Growing Gallery: Notable images of the Great Conjunction submitted to APOD"}
        </Text>
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
    paddingBottom: 190,
  },
  title: {
    fontSize: 19,
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
