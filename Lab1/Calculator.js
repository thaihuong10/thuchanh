// Lab1/Calculator.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const buttons = [
  ["AC", "DEL", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const Project9 = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        const replaced = expression.replace(/×/g, "*").replace(/÷/g, "/");
        const evalResult = eval(replaced);
        setResult("= " + evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === "=" && styles.equalsButton,
                  btn === "AC" && styles.acButton,
                  btn === "DEL" && styles.delButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Project9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 10,
    justifyContent: "flex-end",
  },
  display: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    minHeight: 120,
    justifyContent: "center",
  },
  expression: {
    fontSize: 28,
    color: "#333",
    textAlign: "right",
  },
  result: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2196F3",
    textAlign: "right",
    marginTop: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#e0e0e0",
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  equalsButton: {
    backgroundColor: "#4CAF50",
  },
  acButton: {
    backgroundColor: "#FF5252",
  },
  delButton: {
    backgroundColor: "#FFA726",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
