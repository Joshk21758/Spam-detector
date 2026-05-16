import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Push notifications</Text>
        <Switch></Switch>
        <Text style={styles.label}>Language</Text>
        <TextInput
          placeholder="English"
          placeholderTextColor="#000000ff"
        ></TextInput>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001a",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000ff",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffffff",
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    borderColor: "#000000ff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
