import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const [input, setInput] = useState("");

  const handleInput = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Erro");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || "0"}</Text>

      <View style={styles.buttonContainer}>
        {/* Primeira linha */}
        {["7", "8", "9", "/"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleInput(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Segunda linha */}
        {["4", "5", "6", "*"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleInput(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Terceira linha */}
        {["1", "2", "3", "-"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleInput(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Quarta linha */}
        {["C", "0", "=", "+"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleInput(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingTop: 50,
  },

  display: {
    fontSize: 48,
    marginBottom: 20,
    width: "90%",
    textAlign: "right",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
    width: "90%",
  },

  button: {
    width: "22%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    marginVertical: 5,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
});
