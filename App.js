import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import CreateContact from "./src/screens/CreateContact";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <CreateContact />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
