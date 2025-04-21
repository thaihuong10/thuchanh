// Lab1/Project8.js
import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// Dữ liệu mẫu
const PEOPLE = [
  { name: { first: "Huong", last: "Thai" } },
  { name: { first: "Nghia", last: "Minh" } },
  { name: { first: "Modzy", last: "Tran" } },
  { name: { first: "Minh", last: "Hoang" } },
  { name: { first: "Ngoc", last: "Tran" } },
];

// Hàm nhóm dữ liệu theo chữ cái đầu của họ
const groupPeopleByLastName = (data) => {
  const grouped = data.reduce((acc, item) => {
    const letter = item.name.last[0].toUpperCase();
    if (!acc[letter]) {
      acc[letter] = { title: letter, data: [] };
    }
    acc[letter].data.push(item);
    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => a.title.localeCompare(b.title));
};

// Component chính
const Project8 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Project8;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  sectionHeader: {
    backgroundColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 10,
  },
});
