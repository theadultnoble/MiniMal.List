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
          // borderWidth: 1,
          padding: 15,
          borderRadius: 35,
          height: 240,
          width: "100%",
          justifyContent: "space-between",
          marginTop: 5,
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
      <View
        style={{
          // borderWidth: 1,
          marginTop: 10,
          paddingTop: 3,
          marginBottom: 2,
          height: 43,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Week}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderWidth: 1.2,
                  borderColor: "#2A2A2A",
                  borderRadius: 25,
                  height: 35,
                  width: 73,
                  padding: 5,
                  marginHorizontal: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Poppins_700Bold",
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
        />
      </View>
      <View
        style={{
          width: 350,
          height: 275,
          alignItems: "flex-end",
          // justifyContent: "center",
          borderWidth: 1,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item.type}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderWidth: 0.5,
                  justifyContent: "space-between",
                }}
              >
                <View style={[styles.taskBox, styles.taskShadow]}>
                  <View>
                    <FontAwesome name="circle-thin" size={32} color="#2A2A2A" />
                  </View>
                  <View
                    style={{
                      // borderWidth: 0.5,
                      left: 13,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "Poppins_700Bold",
                        // borderWidth: 0.5,
                        width: 200,
                      }}
                    >
                      {item.TaskDetails}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: "Poppins_200ExtraLight",
                        marginHorizontal: 1,
                        // borderWidth: 0.5,
                      }}
                    >
                      {item.type}
                    </Text>
                  </View>
                  <View style={{ left: 275, bottom: 42, position: "absolute" }}>
                    <MaterialCommunityIcons
                      name="dots-horizontal"
                      size={21}
                      color="#2A2A2A"
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
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
  currentTaskStyle: {
    fontFamily: "Baskerville",
    margin: 5,
  },
  bottomTab: {
    marginTop: 5,
    flexDirection: "row",
    // borderWidth: "1px",
    width: "100%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  taskBox: {
    borderWidth: 1,
    borderColor: "#2A2A2A",
    backgroundColor: "#FBFBFB",
    borderRadius: 20,
    height: 70,
    width: 310,
    paddingLeft: 20,
    // marginTop: 15,
    // marginRight: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  taskShadow: {
    shadowColor: "#2A2A2A",
    shadowOffset: {
      height: 7,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
