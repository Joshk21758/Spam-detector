import { StyleSheet, View, Text } from "react-native";

export default function Results() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View results</Text>
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
    fontWeight: "500",
    textAlign: "left",
    color: "#000000ff",
  },
});
