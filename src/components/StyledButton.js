import { StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StyledButton = ({ title, backgroundColor, color, onPress }) => {
  const navigation = useNavigation();
  const dynamicStyles = StyleSheet.create({
    ButtonStyle: {
      borderRadius: 5,
      borderColor: "#A3A3A3",
      borderWidth: 1,
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: backgroundColor || "white",
    },
  });
  return (
    <View>
      <Pressable
        style={dynamicStyles.ButtonStyle}
        onPress={() => {
          onPress();
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "IndieFlower",
            color: color || "black",
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
