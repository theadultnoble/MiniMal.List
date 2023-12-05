import { StyleSheet, Text, View, Button } from "react-native";
import { React, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const AddTaskBottomSheet = ({ innerRef, closeButton }) => {
  const snapPoints = useMemo(() => ["95%"]);

  return (
    <>
      <BottomSheet ref={innerRef} snapPoints={snapPoints} index={0}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>Awesome 🎉 Tasklist</Text>
          <Button onPress={() => closeButton()} title="Close" />
        </View>
      </BottomSheet>
    </>
  );
};

export default AddTaskBottomSheet;

const styles = StyleSheet.create({});
