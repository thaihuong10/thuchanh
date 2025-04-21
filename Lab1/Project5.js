// Lab1/Project5.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Component con: ô vuông có text và màu nền tuỳ chỉnh
const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

// Component chính
const Project5 = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c" />
    </View>
  );
};

export default Project5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // sắp xếp theo hàng ngang
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 4,
  },
});
