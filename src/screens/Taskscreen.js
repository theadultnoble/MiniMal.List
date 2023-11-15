import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";

const Taskscreen = ({ navigation }) => {
  const auth = getAuth(app);

  return (
    <View style={styles.container}>
      <View style={styles.headerContents}>
        <Pressable
          onPress={() => {
            navigation.navigate("welcomescreen");
          }}
        >
          <Ionicons
            name="settings-outline"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end" }}
          />
        </Pressable>
      </View>
      <View style={styles.nameDateContent}>
        {/* TODO: Pull and display username and date */}
        <Text style={{ fontSize: 30, fontFamily: "IndieFlower" }}>
          Hello, User
        </Text>
        <Text style={{ fontSize: 15, fontFamily: "Baskerville" }}>
          April, 26th 2023
        </Text>
      </View>
      <View style={styles.bottomTab}>
        <AntDesign name="home" size={40} color="black" />
        <Ionicons name="add-circle-outline" size={60} color="black" />

        <EvilIcons name="calendar" size={50} color="black" />
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
  headerContents: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
    height: 50,
    // borderWidth: "1px",
    padding: 5,
  },
  nameDateContent: {
    marginTop: 10,
    width: "100%",
    // borderWidth: "1px",
    height: "30px",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab: {
    marginTop: 10,
    flexDirection: "row",
    // borderWidth: "1px",
    width: "100%",
    padding: 10,
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginBottom: 48,
    top: 500,
  },
  addWrapper: {
    borderWidth: "1px",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
});
