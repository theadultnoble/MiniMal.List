import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const CalendarScreen = () => {
  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
