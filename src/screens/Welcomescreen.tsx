import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../fireconfig/firebase";

//TODO: Validate user is signed in here
// user ? do this(_navigate task) : do this instead (_navigate sign up)

//When WelcomeScreen mounts set time to navigate to screen

const Welcomescreen = ({ navigation }) => {
  const auth = getAuth(app);

  React.useEffect(() => {
    // const timer =
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate("tasksdrawer", { screen: "taskscreen" });
        } else {
          navigation.navigate("loginscreen");
        }
      });
    }, 3000);

    // clearTimeout(timer);
  }, []);

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
