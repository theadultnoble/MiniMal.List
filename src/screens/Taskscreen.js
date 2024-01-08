import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { React, useState, useMemo, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";
import Task from "../components/Task";
import DatePill from "../components/DatePill";
import ActiveTask from "../components/ActiveTask";
import AddTaskBottomSheet from "../components/AddTaskBottomSheet";

const Taskscreen = ({ navigation }) => {
  const auth = getAuth(app);
  const addBottomSheetModalRef = useRef(null);

  const handlePresentBottomCalendar = () => {
    addBottomSheetModalRef.current?.expand();
  };

  const handleCloseBottomCalendar = () => {
    addBottomSheetModalRef.current?.close();
  };

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
          style={{ color: "#F0F0F0" }}
          name="home"
          size={35}
          onPress={() => navigation.navigate("taskscreen")}
        />
        <Ionicons
          style={{
            color: "#F0F0F0",
          }}
          name="add-circle"
          size={65}
          onPress={() => handlePresentBottomCalendar()}
        />
        <Feather style={{ color: "#F0F0F0" }} name="calendar" size={35} />
      </View>
      <AddTaskBottomSheet
        innerRef={addBottomSheetModalRef}
        closeButton={handleCloseBottomCalendar}
      />
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
    borderRadius: 25,
    backgroundColor: "#2A2A2A",
    width: "85%",
    height: 70,
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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
