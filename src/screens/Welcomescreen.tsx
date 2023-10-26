import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Welcomescreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40, fontFamily: "IndieFlower" }}>
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
    padding: 20,
  },
});
