import React, { useState } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

import Project1 from './Project';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';
import Calculator from './Calculator';
// ... (import các project khác)

interface Props {
  goBack: () => void; // Hàm này sẽ được truyền từ component cha (navigator)
}

export default function Lab1Screen({ goBack }: Props) {
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  const renderProject = () => {
    switch (currentProject) {
      case 1: return <Project1 />;
      case 2: return <Project2 />;
      case 3: return <Project3 />;
      case 4: return <Project4 />;
      case 5: return <Project5 />;
      case 6: return <Project6 />;
      case 7: return <Project7 />;
      case 8: return <Project8 />;
      case 9: return <Calculator />;
      // ... (các case khác)
      case 9: return <Calculator />;
      default:
        return (
          <ScrollView contentContainerStyle={styles.menu}>
            <Text style={styles.title}>Lab 1 - React Native</Text>
            {Array.from({ length: 8 }, (_, i) => (
              <View key={i + 1} style={styles.buttonContainer}>
                <Button
                  title={`Project ${i + 1}`}
                  onPress={() => setCurrentProject(i + 1)}
                />
              </View>
            ))}
            <View style={styles.buttonContainer}>
              <Button title="Calculator" onPress={() => setCurrentProject(9)} />
            </View>
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ADD8E6' }}>
      {renderProject()}
      
      {/* Thêm nút back ở cả 2 trường hợp */}
      <View style={styles.backButton}>
        <Button
          title={currentProject ? "← Back to Lab 1 Menu" : "← Back to Lab Selection"}
          onPress={currentProject ? () => setCurrentProject(null) : goBack}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  backButton: {
    padding: 10,
  },
});