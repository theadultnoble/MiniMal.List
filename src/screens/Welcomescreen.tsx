import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

//TODO: Receive user* as a prop from App.js
// user ? do this(_navigate task) : do this instead (_navigate sign up)

//When WelcomeScreen mounts set time to navigate to screen

const Welcomescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 70, fontFamily: "IndieFlower" }}>
        MiniMal-List
      </Text>
      <StatusBar />
    </View>
  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
});
