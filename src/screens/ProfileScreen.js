import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={35}
        color="black"
        onPress={() => navigation.navigate("taskscreen")}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 10,
    // borderWidth: "10px",
  },
});
