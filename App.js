import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, TextInput } from "react-native-web";
import colors from "./components/colors";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.gasLevel}>
          <Text style={styles.title}>Gas Level</Text>
        </View>
        <View style={styles.gasContent}>
          <Text style={styles.title}>LPG Gas Content</Text>
        </View>
        <View style={styles.camera}>
          <Text>Camera IP Address</Text>
          <Text>Camera Port Number</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    margin: 10,
  },
  gasLevel: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    height: "30%",
    margin: 10,
    padding: 15,
  },
  gasContent: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    height: "30%",
    margin: 10,
    padding: 15,
  },
  camera: {
    backgroundColor: colors.lightGray,
    height: "25%",
    margin: 10,
    borderRadius: 20,
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.black,
  },
});
