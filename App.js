import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, TextInput } from "react-native-web";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.gasLevel}>
          <Text>Gas Level</Text>
        </View>
        <View style={styles.gasContent}>
          <Text>LPG Gas Content</Text>
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
    backgroundColor: "#CCD5AE",
    borderRadius: 20,
    height: "30%",
    margin: 10,
    padding: 15,
  },
  gasContent: {
    backgroundColor: "#CCD5AE",
    borderRadius: 20,
    height: "30%",
    margin: 10,
    padding: 15,
  },
  camera: {
    backgroundColor: "#CCD5AE",
    height: "25%",
    margin: 10,
    borderRadius: 20,
    padding: 15,
  },
});
