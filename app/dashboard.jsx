import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { axios } from "axios";
export default function Dashboard() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Handle analysis function
  const handleAnalysis = async () => {
    if (!text) {
      alert("Please fill in text field");
    }

    setLoading(true);
    setResult(null);
    try {
      // send request to express API
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/analyze/verify-security`,
        {
          logsToAnalyze: text,
        },
      );

      // check if response is success
      if (response.status === 200 && response.data.success) {
        // save state to UI
        setResult(response.data.isMalicious);
      } else {
        alert("Failed to send API request to Node");
      }
    } catch (error) {
      console.log("Analysis failed", error);
      alert("AI engine is offline!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subTitle}>Paste text to analyze spam.</Text>
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Ready to inspect..."
          value={text}
          onChangeText={setText}
          placeholderTextColor="#000000"
        />
        <TouchableOpacity style={styles.button} onPress={handleAnalysis}>
          {loading ?
            <ActivityIndicator color="#ff6f00" size={15} />
          : <MaterialCommunityIcons
              name="text-search"
              color="black"
              size={27}
            />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.resultSection}>
        {/* Results logic */}
        {result !== null && (
          <View
            style={[
              styles.resultBox,
              result ? styles.maliciousBg : styles.safeBg,
            ]}
          >
            <Text style={styles.resultTitle}>
              {result ? "THREAT DETECTED!" : "SECURE"}
            </Text>
            <Text style={styles.resultText}>
              {result ?
                "The AI engine flagged this log as malicious."
              : "No anomalies detected in the log."}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    color: "#000000ff",
  },
  subTitle: {
    fontSize: 20,
    textAlign: "left",
    color: "#000000",
    marginBottom: 60,
  },
  input: {
    minHeight: 55,
    width: 250,
    borderColor: "#000000",
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    paddingLeft: 7,
    paddingVertical: 3,
    fontSize: 19,
    color: "black",
  },
  inputBar: {
    borderRadius: 15,
    minHeight: 55,
    paddingVertical: 8,
    paddingHorizontal: 5,
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    marginBottom: 10,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#c7c7c7",
    height: 50,
    width: 50,
    padding: 15,
    alignItems: "center",
  },
  resultSection: {
    height: 400,
    width: "auto",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
  },
  resultBox: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  maliciousBg: {
    backgroundColor: "#ffebee",
    borderWidth: 1,
    borderColor: "#ef5350",
  },
  safeBg: {
    backgroundColor: "#e8f5e9",
    borderWidth: 1,
    borderColor: "#66bb6a",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 5,
  },
  resultText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});
