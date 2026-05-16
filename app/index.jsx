import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Secure Guard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000ff",
  },
});
