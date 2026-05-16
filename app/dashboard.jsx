import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>
        Paste a text into the field to detect.
      </Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Paste your text here..."
        style={styles.input}
        placeholderTextColor="#000000ff"
        multiline
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Detect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "left",
    color: "#000000ff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    color: "black",
    marginBottom: 390,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000ff",
    borderRadius: 15,
    fontSize: 22,
    textAlign: "left",
    color: "black",
    minHeight: 70,
    width: "auto",
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#0a0708ff",
    borderRadius: 17,
    justifyContent: "center",
    height: 50,
    width: "auto",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
});
