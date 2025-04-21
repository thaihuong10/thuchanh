import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

const Project2 = () => (
  <View style={styles.container}>
    <Button title="Say Hello" onPress={() => Alert.alert("Hello")} />
  </View>
);

export default Project2;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
