import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Textinput = ({ placeholder }) => {
  return (
    <View>
      <TextInput style={styles.TextInputStyle} placeholder={placeholder} />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  TextInputStyle: {
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 1,
    width: "100%",
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 3,
    marginBottom: 20,
    fontSize: 23,
    fontFamily: "IndieFlower",
  },
});
