import { StyleSheet, Text, View } from "react-native";
import { React, useState, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const CalendarBottomSheet = ({ ref }) => {
  const snapPoints = useMemo(() => ["50%"]);

  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} index={0}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

export default CalendarBottomSheet;

const styles = StyleSheet.create({});
