import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Поиск</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FeedScreen;
