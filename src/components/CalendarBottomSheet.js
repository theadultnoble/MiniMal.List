import { Button, StyleSheet, Text, View } from "react-native";
import { React, useState, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const CalendarBottomSheet = ({ innerRef, closeButton }) => {
  const snapPoints = useMemo(() => ["95%"]);

  return (
    <>
      <BottomSheet ref={innerRef} snapPoints={snapPoints} index={0}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>Awesome 🎉</Text>
          <Button onPress={() => closeButton()} title="Close" />
        </View>
      </BottomSheet>
    </>
  );
};

export default CalendarBottomSheet;

const styles = StyleSheet.create({});
