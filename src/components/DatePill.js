import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const DatePill = () => {
  let Week = [
    { date: "16", day: "Mo" },
    { date: "17", day: "Tu" },
    { date: "18", day: "We" },
    { date: "19", day: "Th" },
    { date: "20", day: "Fr" },
    { date: "21", day: "Sa" },
    { date: "22", day: "Su" },
  ];
  return (
    <View>
      <View style={styles.viewStyle}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Week}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => {
            return (
              <View style={styles.pillBorder}>
                <Text style={styles.dateStyle}>{item.date}</Text>
                <Text style={styles.dayStyle}>{item.day}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DatePill;

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 1,
    marginTop: 10,
    paddingTop: 3,
    marginBottom: 2,
    height: 43,
  },
  pillBorder: {
    borderWidth: 1.2,
    borderColor: "#2A2A2A",
    borderRadius: 25,
    height: 33,
    width: 70,
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dateStyle: {
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
    // borderWidth: 0.5,
  },
  dayStyle: {
    fontSize: 12,
    fontFamily: "Poppins_200ExtraLight",
    marginHorizontal: 1,
    // borderWidth: 0.5,
  },
});
