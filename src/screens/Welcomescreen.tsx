import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

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
