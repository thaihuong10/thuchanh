// Lab1/Project3.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";

// Đây là component con CustomButton
const CustomButton = ({ text, onPress, buttonStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

// Đây là component Project để hiển thị test
const Project3 = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        text="Click Me"
        onPress={() => Alert.alert("Hello from Custom Button!")}
        buttonStyle={{ backgroundColor: "tomato" }}
      />
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: { color: "white", fontWeight: "bold" },
});
