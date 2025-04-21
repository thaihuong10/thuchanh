// Lab1/Project.js
import { StyleSheet, Text, View } from "react-native";

const Project = () => {
    console.log("Project component loaded");
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightgray" }}>
            <Text style={{ fontSize: 24, color: "black" }}>Hello world</Text>
        </View>
    );
};
export default Project;

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
