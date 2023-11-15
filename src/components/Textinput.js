import { StyleSheet, TextInput, View } from "react-native";
import { React, useState } from "react";

const Textinput = ({
  placeholder,
  autoCorrect,
  autoCapitalize,
  onChangeText,
  name,
  value,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(newText) => onChangeText(name, newText)}
        style={styles.TextInputStyle}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
    </View>
  );
};

export default Textinput;
const styles = StyleSheet.create({
  TextInputStyle: {
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 3,
    marginBottom: 20,
    fontSize: 23,
    fontFamily: "Baskerville",
  },
});
