import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Planetary from "./src/Planetary";

const HomeScreen = ({ navigation }) => {
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

// function DetailScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Detail Screen </Text>
//       <Button
//         title="GO to detsils"
//         onPress={() => navigation.navigate("Details")}
//       ></Button>
//       <Button
//         title="GO to Home"
//         onPress={() => navigation.navigate("Home")}
//       ></Button>
//       <Button title="GO to back" onPress={() => navigation.goBack()}></Button>
//       <Button
//         title="GO to first screen"
//         onPress={() => navigation.popToTop()}
//       ></Button>
//     </View>
//   );
// }

// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// import Content from "./Content";
// import axios from "axios";

// const Planetary = () => {
//   const API_KEY = "Bm5oBuVTS8seqOONvgjutNa1Ygr6Vg1XvfXmkk2O";
//   const [state, setState] = React.useState();

//   React.useEffect(() => {
//     axios
//       .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//       .then((res) => setState(res.data));
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Content state={state} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {},
//   text: {
//     fontSize: 23,
//     color: "#000",
//   },
// });
// export default Planetary;
