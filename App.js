import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Nested View*/}
      <View style={styles.box}>
        <View style={styles.innerbox}></View>
      </View>

      {/* View item in row*/}
      <View style={styles.rowBox}>
        <View style={styles.innerboxRed}></View>
        <View style={styles.innerboxBlue}></View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "red",
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  innerbox: {
    backgroundColor: "lightgreen",
    height: 160,
    width: 160,
  },
  rowBox: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 350,
  },
  innerboxRed: {
    backgroundColor: "red",
    height: 160,
    width: 160,
  },
  innerboxBlue: {
    backgroundColor: "blue",
    height: 160,
    width: 160,
  },
});
