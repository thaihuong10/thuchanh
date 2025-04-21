// Lab1/Project6.js
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const Project6 = () => {
  const data = Array.from({ length: 15 }, (_, i) => i + 1); // [1..15]

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {data.map((item) => (
        <Square key={item} text={`Square ${item}`} />
      ))}
    </ScrollView>
  );
};

export default Project6;

const styles = StyleSheet.create({
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
