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
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    color: "#000000ff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    color: "black",
    marginBottom: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000ff",
    borderRadius: 15,
    fontSize: 20,
    textAlign: "left",
    color: "black",
    height: 100,
    width: "auto",
    marginBottom: 50,
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
