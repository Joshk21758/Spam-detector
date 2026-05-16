import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
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
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your Password"
        style={styles.input}
        placeholderTextColor="#343333ff"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#ffffffff",
    padding: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000ff",
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000ff",
    borderRadius: 12,
    padding: 15,
    fontSize: 20,
    textAlign: "left",
    color: "black",
    height: 50,
    width: "auto",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1b3a5dff",
    borderRadius: 17,
    paddingTop: 10,
    alignItems: "center",
    height: 50,
    width: "auto",
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "400",
    textAlign: "center",
    color: "white",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 5,
    marginBottom: 10,
    color: "#000000ff",
  },
});
