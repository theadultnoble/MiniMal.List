import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";

const Taskscreen = ({ navigation }) => {
  const auth = getAuth(app);

  let Week = [
    { date: "16", day: "Mo" },
    { date: "17", day: "Tu" },
    { date: "18", day: "We" },
    { date: "19", day: "Th" },
    { date: "20", day: "Fr" },
    { date: "21", day: "Sa" },
    { date: "22", day: "Su" },
  ];

  let tasks = [
    { type: "Task1", TaskDetails: "Attend DEV fest 2023" },
    { type: "Task2", TaskDetails: "Finish docs structure for Back4app" },
    { type: "Task3", TaskDetails: "Play with Photoshop" },
  ];

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
          <Text
            style={{
              fontSize: 40,
              fontFamily: "IndieFlower",
              // borderWidth: 1,
              height: 43,
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "IndieFlower",
              marginLeft: 5,
              fontWeight: "bold",
              // borderWidth: 1,
              height: 43,
            }}
          >
            User
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins_200ExtraLight",
            // borderWidth: 1,
            margin: 5,
          }}
        >
          April, 26th 2023
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 35,
          height: 240,
          width: "100%",
          justifyContent: "space-between",
          marginTop: 10,
          backgroundColor: "#2A2A2A",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FontAwesome name="circle-thin" size={55} color="#FFFFFF" />
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={34}
            color="#FFFFFF"
          />
        </View>
        <View style={{ margin: 9, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 5,
              color: "#E3E3E3",
            }}
          >
            14:00 -15:30
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 25,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            Prepare for a presentation
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_200ExtraLight",
              fontSize: 13,
              fontWeight: "bold",
              marginTop: 10,
              color: "#E3E3E3",
            }}
          >
            Priority: High
          </Text>
        </View>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Week}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderWidth: 1.2,
                borderColor: "#2A2A2A",
                borderRadius: 25,
                height: 25,
                width: 60,
                padding: 5,
                marginHorizontal: 5,
                marginVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  fontFamily: "Poppins_400Regular",
                  // borderWidth: 0.5,
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins_200ExtraLight",
                  marginHorizontal: 1,
                  // borderWidth: 0.5,
                }}
              >
                {item.day}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.date}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#2A2A2A",
                borderRadius: 15,
                height: 65,
                padding: 5,
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                // flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  fontFamily: "Poppins_400Regular",
                  // borderWidth: 0.5,
                }}
              >
                {item.TaskDetails}
              </Text>
              <Text
                style={{
                  justifyContent: "flex-start",
                  fontSize: 13,
                  fontFamily: "Poppins_200ExtraLight",
                  marginHorizontal: 1,
                  // borderWidth: 0.5,
                }}
              >
                {item.type}
              </Text>
            </View>
          );
        }}
      />

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
          size={65}
          color="black"
        />
        <Feather
          style={{ color: "#2A2A2A" }}
          name="calendar"
          size={45}
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
    margin: 4,
    width: "100%",
    height: "30px",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth: "1px",
  },
  currentTaskStyle: {
    fontFamily: "Baskerville",
    margin: 5,
  },
  bottomTab: {
    marginTop: 10,
    flexDirection: "row",
    // borderWidth: "1px",
    width: "100%",
    padding: 10,
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginBottom: 35,
  },
});
