import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Task = () => {
  let tasks = [
    { type: "Task1", TaskDetails: "Attend DEV fest 2023" },
    { type: "Task2", TaskDetails: "Finish docs structure for Back4app" },
    { type: "Task3", TaskDetails: "Play with Photoshop" },
  ];

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                // borderWidth: 0.5,
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
  );
};

export default Task;

const styles = StyleSheet.create({
  taskBox: {
    // borderWidth: 1,
    // borderColor: "#2A2A2A",
    backgroundColor: "#FBFBFB",
    borderRadius: 20,
    height: 75,
    width: 310,
    paddingLeft: 20,
    marginTop: 15,
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
