import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LinkText = ({ title, NavigateTo }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate(NavigateTo);
        }}
      >
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
