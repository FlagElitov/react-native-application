import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Navbar";
import Content from "./src/Content";
import axios from "axios";

// const App = () => {
//   const API_KEY = "Bm5oBuVTS8seqOONvgjutNa1Ygr6Vg1XvfXmkk2O";
//   const [state, setState] = React.useState();

//   React.useEffect(() => {
//     axios
//       .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//       .then((res) => setState(res.data));
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Navbar title="NASA" />
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
// export default App;

// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="GO to detsirrs"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
}
function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen </Text>
      <Button
        title="GO to detsils"
        onPress={() => navigation.navigate("Details")}
      ></Button>
      <Button
        title="GO to Home"
        onPress={() => navigation.navigate("Homes")}
      ></Button>
      <Button title="GO to back" onPress={() => navigation.goBack()}></Button>
      <Button
        title="GO to first screen"
        onPress={() => navigation.popToTop()}
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homes" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
