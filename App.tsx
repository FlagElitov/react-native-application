import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Planetary from "./src/Planetary";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.content}>
        <ImageBackground
          style={styles.image}
          source={{
            uri:
              "https://apod.nasa.gov/apod/image/2012/Trifid_HubbleMehla_1080.jpg",
          }}
        ></ImageBackground>
        <Button
          title="Astronomy Picture of the Day"
          onPress={() => navigation.navigate("Planetary")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: { fontSize: 17, fontWeight: "700", justifyContent: "flex-start" },
  content: {
    width: 320,
    height: 150,
    backgroundColor: "#fdfdfd",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 2,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planetary" component={Planetary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;