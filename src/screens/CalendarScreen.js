import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
const CalendarScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CalendarList
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
      />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
