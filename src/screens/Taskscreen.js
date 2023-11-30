import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";
import Task from "../components/Task";
import DatePill from "../components/DatePill";
import ActiveTask from "../components/ActiveTask";

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
            size={30}
            color="black"
            style={{ alignSelf: "flex-end" }}
          />
        </Pressable>
      </View>
      <View style={styles.nameDateContent}>
        {/* TODO: Pull and display username and date */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.greetingTaskStyle}>Hello, User</Text>
        </View>
        <Text style={styles.dateStyle}>April, 26th 2023</Text>
      </View>
      <ActiveTask />
      <DatePill />
      <View style={styles.taskViewStyle}>
        <Task />
      </View>

      <View style={styles.bottomTab}>
        <Feather
          style={{ color: "#2A2A2A" }}
          name="home"
          size={45}
          color="black"
        />
        <Ionicons
          style={{ color: "#2A2A2A" }}
          name="add-circle"
          size={74}
          color="black"
        />
        <Feather
          style={{ color: "#2A2A2A" }}
          name="calendar"
          size={44}
          color="black"
        />
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
    padding: 20,
    // borderWidth: "10px",
  },
  headerContents: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "100%",
    height: 35,
    // borderWidth: "1px",
  },
  nameDateContent: {
    margin: 1,
    bottom: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth: "1px",
  },
  greetingTaskStyle: {
    fontSize: 40,
    fontFamily: "IndieFlower",
    marginLeft: 5,
    fontWeight: "bold",
    // borderWidth: 1,
    height: 43,
  },
  dateStyle: {
    fontSize: 15,
    fontFamily: "Poppins_200ExtraLight",
    // borderWidth: 1,
    margin: 5,
  },
  currentTaskStyle: {
    fontFamily: "Baskerville",
    margin: 5,
  },
  bottomTab: {
    flexDirection: "row",
    // borderWidth: "1px",
    width: "100%",
    height: 80,
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 30,
  },
  taskViewStyle: {
    width: 350,
    height: 290,
    alignItems: "flex-end",
    // justifyContent: "center",
    // borderWidth: 1,
    paddingRight: 5,
  },
});
