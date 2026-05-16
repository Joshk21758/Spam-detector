import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your Email"
        style={styles.input}
        placeholderTextColor="#343333ff"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your Password"
        style={styles.input}
        placeholderTextColor="#343333ff"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 110,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#000000ff",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000ff",
    borderRadius: 12,
    padding: 20,
    fontSize: 20,
    textAlign: "left",
    color: "black",
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#08203aff",
    borderRadius: 17,
    paddingTop: 7,
    height: 50,
    width: "auto",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "white",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 5,
    marginBottom: 5,
    color: "#000000ff",
  },
});
