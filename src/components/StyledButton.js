import { StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";

const StyledButton = ({ title, color }) => {
  return (
    <View>
      <Pressable style={styles.ButtonStyle}>
        <Text style={{ fontSize: 24, fontFamily: "IndieFlower" }}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 5,
    borderColor: "#A3A3A3",
    borderWidth: 1,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
