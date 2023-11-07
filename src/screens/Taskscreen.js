import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";

const Taskscreen = ({ navigation }) => {
  const auth = getAuth(app);

  const checkUser = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User Is Logged");
      console.log(user);
    } else {
      console.log("no userrrr");
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        {/* <Button title="check user" onPress={checkUser()} /> */}
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color="black"
            style={{ right: 0, top: 10, position: "absolute" }}
          />
        </Pressable>
      </View>

      <StatusBar />
    </View>
  );
};

export default Taskscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  contents: {
    // borderColor: "black",
    // borderWidth: 2,
    marginTop: 20,
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  IoniconsStyle: {
    right: 0,
    top: 0,
  },
});
