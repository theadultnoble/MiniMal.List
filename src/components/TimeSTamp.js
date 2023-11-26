import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TimeSTamp = () => {
  return (
    <View>
      <Text style={styles.textSTamp}>9.00</Text>
    </View>
  );
};

export default TimeSTamp;

const styles = StyleSheet.create({
  textSTamp: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
});
