import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import Project from "./Lab1/Project";
import Project2 from "./Lab1/Project2";
import Project3 from "./Lab1/Project3";
import Project4 from "./Lab1/Project4";
import Project5 from "./Lab1/Project5";
import Project6 from "./Lab1/Project6";
import Project7 from "./Lab1/Project7";
import Project8 from "./Lab1/Project8";
import Calculator from "./Lab1/Calculator";
const projectList = [
  { id: 1, name: "Project 1: Hello World", component: Project },
  { id: 2, name: "Project 2: Capturing Taps", component: Project2 },
  { id: 3, name: "Project 3: Custom Button", component: Project3 },
  { id: 4, name: "Project 4: State & Props", component: Project4 },
  { id: 5, name: "Project 5: Styling", component: Project5 },
  { id: 6, name: "Project 6: ScrollView", component: Project6 },
  { id: 7, name: "Project 7: Form", component: Project7 },
  { id: 8, name: "Project 8: Long List", component: Project8 },
  { id: 9, name: "Calculator", component: Calculator },
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!selectedProject) {
    return (
      <View style={styles.menuContainer}>
        <Text style={styles.title}>Chọn Project</Text>
        <FlatList
          data={projectList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => setSelectedProject(() => item.component)}
            >
              <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  const SelectedComponent = selectedProject;

  return (
    <View style={styles.appContainer}>
      {typeof SelectedComponent === "function" ? (
        <SelectedComponent />
      ) : (
        <Text style={styles.errorText}>⚠️ Component không hợp lệ hoặc chưa được chọn</Text>
      )}
      <TouchableOpacity style={styles.backButton} onPress={() => setSelectedProject(null)}>
        <Text style={styles.backText}>← Quay lại menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  menuContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  menuItem: {
    padding: 15,
    backgroundColor: "#2196F3",
    marginVertical: 8,
    borderRadius: 8,
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
  },
  backButton: {
    padding: 12,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "red",
  },
});
