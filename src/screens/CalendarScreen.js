import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
const CalendarScreen = () => {
  return (
    <View style={styles.container}>
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
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    marginBottom: 30,
    margin: 10,
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
