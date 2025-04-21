// Lab1/Project7.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Project7 = () => {
  const [name, setName] = useState("");

  const handleGreet = () => {
    if (name.trim() === "") {
      Alert.alert("Please enter your name!");
    } else {
      Alert.alert(`Hello, ${name}!`);
      setName(""); // reset sau khi hiển thị
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <Button title="Say Hello" onPress={handleGreet} />
    </View>
  );
};

export default Project7;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
