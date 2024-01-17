import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={35}
        color="black"
        onPress={() => navigation.navigate("taskscreen")}
      />
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          headerStyle={styles.headStyle}
          enableSwipeMonths={true}
          // futureScrollRange={3}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          //Theme
          theme={{
            calendarBackground: "#F0F0F0",
            textSectionTitleColor: "white",
            textSectionTitleDisabledColor: "gray",
            dayTextColor: "#2A2A2A",
            textDayHeaderFontFamily: "Poppins_400Regular",
            textMonthFontFamily: "Poppins_700Bold",
            textDayFontFamily: "Poppins_400Regular",
            todayTextColor: "white",
            selectedDayTextColor: "white",
            monthTextColor: "white",
            indicatorColor: "white",
            selectedDayBackgroundColor: "#333248",
            arrowColor: "white",
            // textDisabledColor: 'red',
            stylesheet: {
              calendar: {
                header: {
                  week: {
                    marginTop: 50,
                    marginHorizontal: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                },
              },
            },
          }}
        />
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    marginBottom: 30,
    margin: 10,
  },
  calendarContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  calendar: {
    // borderColor: "red",
    // borderWidth: 1,
    flex: 1,
    minWidth: "100%",
  },
  headStyle: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    padding: 5,
  },
});
