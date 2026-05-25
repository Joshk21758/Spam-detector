import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import apiClient from "../../config/api";
import * as SecureStore from "expo-secure-store";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle login action
  const handleLogin = async () => {
    // Client-side validation
    if (!email || !password) {
      alert("Please fill in all fields!");
    }

    setLoading(true);
    try {
      // Send request to Express API
      const response = await apiClient.post("/user/login", {
        email,
        password,
      });

      // check if response is success
      if (response.status === 200 && response.data?.token) {
        // Save token securely
        await SecureStore.setItemAsync("user_token", response.data.token);

        alert("Logged in successfully!");
        // redirect to dashboard
        router.replace("/dashboard");
      } else {
        alert("Failed to send API request");
      }
    } catch (error) {
      console.error("Login error", error);
      const errorMsg = error.response?.data?.message;
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your Email"
        style={styles.input}
        placeholderTextColor="#000000ff"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your Password"
        style={styles.input}
        placeholderTextColor="#000000ff"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {loading ?
            <ActivityIndicator color="#ffffffff" size={20} />
          : "Login"}
        </Text>
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
