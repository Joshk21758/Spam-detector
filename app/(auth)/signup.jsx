import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { axios } from "axios";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle register action
  const handleRegister = async () => {
    // client-side validation
    if (!email || !password) {
      alert("Please fill in all fields!");
    }

    // Send request to Express API
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/user/register`,
        {
          email,
          password,
          confirmPassword,
        },
      );

      // Check if response is success
      if (response.status === 201) {
        router.replace("/dashboard");
        alert("Successfully registered!");
      } else {
        alert("Failed to send API request");
      }
    } catch (err) {
      alert("Failed to Register user", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="account-circle"
        size={70}
        color="#000000ff"
        style={styles.icon}
      />
      <Text style={styles.title}>Create an Account</Text>
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
        secureTextEntry={true}
        placeholderTextColor="#000000ff"
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your Password"
        style={styles.input}
        secureTextEntry={true}
        placeholderTextColor="#000000ff"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          {loading ?
            <ActivityIndicator color="#ffffffff" size={20} />
          : "Sign Up"}
        </Text>
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
  icon: {
    marginLeft: 130,
  },
});
