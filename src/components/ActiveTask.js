import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ActiveTask = () => {
  return (
    <View style={styles.viewStyle1}>
      <View style={styles.viewStyle2}>
        <FontAwesome name="circle-thin" size={55} color="#FFFFFF" />
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={34}
          color="#FFFFFF"
        />
      </View>
      <View style={{ margin: 9, justifyContent: "flex-end" }}>
        <Text style={styles.timeStampTextStyle}>14:00 -15:30</Text>
        <Text style={styles.taskTextStyle}>Prepare for a presentation</Text>
        <Text style={styles.priorityStyle}>Priority: High</Text>
      </View>
    </View>
  );
};

export default ActiveTask;

const styles = StyleSheet.create({
  viewStyle1: {
    // borderWidth: 1,
    padding: 15,
    borderRadius: 35,
    height: 240,
    width: "100%",
    justifyContent: "space-between",
    marginTop: 5,
    backgroundColor: "#2A2A2A",
  },
  viewStyle2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeStampTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#E3E3E3",
  },
  taskTextStyle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  priorityStyle: {
    fontFamily: "Poppins_200ExtraLight",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
    color: "#E3E3E3",
  },
});
