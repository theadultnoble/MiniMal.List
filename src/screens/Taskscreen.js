import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Taskscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color="black"
            style={{ right: 0, top: 10, position: "absolute" }}
          />
        </Pressable>
      </View>
      <StatusBar />
    </View>
  );
};

export default Taskscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  contents: {
    // borderColor: "black",
    // borderWidth: 2,
    marginTop: 20,
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  IoniconsStyle: {
    right: 0,
    top: 0,
  },
});
