import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { React, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import theme from "../theme";
import { EvilIcons } from "@expo/vector-icons";
import Textinput from "./Textinput";
import StyledButton from "./StyledButton";
import AnimatedRectangularToggle from "./togglComponent";
import { Calendar } from "react-native-calendars";

const AddTaskBottomSheet = ({ innerRef, closeButton }) => {
  const snapPoints = useMemo(() => ["95%"]);

  const [value, setValue] = useState("");

  //callback function to handle input state
  const handleInputChnage = (name, newText) => {
    setValue({ ...value, [name]: newText });
  };

  return (
    <>
      <BottomSheet ref={innerRef} snapPoints={snapPoints} index={-1}>
        <View style={styles.container}>
          <EvilIcons
            name="chevron-down"
            size={50}
            color="black"
            onPress={() => closeButton()}
          />
          <Textinput
            placeholder={"Task"}
            autoCorrect={false}
            onChangeText={handleInputChnage}
            name="task"
            value={value.name}
          />

          <View>
            {/*TODO:Fix toggl styling */}
            {/* <AnimatedRectangularToggle /> */}
          </View>
          <StyledButton
            title={"Create task"}
            backgroundColor="#2A2A2A"
            color="#F0F0F0"
            onPress={() => console.log("Done🖊️")}
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
                // calendarBackground: "#F0F0F0",
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
      </BottomSheet>
    </>
  );
};

export default AddTaskBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  doneButton: {
    borderWidth: "1px",
    backgroundColor: "#2A2A2A",
    borderRadius: "10px",
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  calendar: {
    // borderColor: "red",
    // borderWidth: 1,
    // flex: 1,
    minWidth: "100%",
  },
  headStyle: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    padding: 5,
  },
});
