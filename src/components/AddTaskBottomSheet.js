import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { React, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const AddTaskBottomSheet = ({ innerRef, closeButton }) => {
  const snapPoints = useMemo(() => ["95%"]);

  return (
    <>
      <BottomSheet ref={innerRef} snapPoints={snapPoints} index={-1}>
        <View style={styles.container}>
          <View>
            <Pressable style={styles.doneButton} onPress={() => closeButton()}>
              <Text style={{ color: "white", fontSize: 20 }}>Close</Text>
            </Pressable>
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
    borderColor: "black",
    borderWidth: "0.5px",
    padding: 15,
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
});
