import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const LinkText = ({ title }) => {
  return (
    <View>
      <Pressable>
        <Text style={styles.TextStyle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  TextStyle: {
    padding: 3,
    fontFamily: "IndieFlower",
  },
});
