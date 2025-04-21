// Lab1/Project4.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Component nhận props từ cha
const Greeting = ({ name }) => {
  return <Text style={styles.text}>Hello, {name}!</Text>;
};

// Component chính: có state và dùng props
const Project4 = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Greeting name="Thai Huong" />
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Project4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
