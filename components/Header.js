import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>IoT Gas App</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "#D4A373",
    justifyContent: "center",
    paddingTop: 15,
    paddingLeft: 10,
    elevation: 10,
  },
  textHeader: {
    color: "#FEFAE0",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default Header;
