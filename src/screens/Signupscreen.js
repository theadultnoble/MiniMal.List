import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { React } from "react";
import Textinput from "../components/Textinput";
import StyledButton from "../components/StyledButton";
import LinkText from "../components/LinkText";

const Signupscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={{ fontSize: 40, fontFamily: "IndieFlower" }}>
          Welcome to MiniMal-List
        </Text>
        <View style={styles.formStyle}>
          <Textinput placeholder={"Username"} />
          <Textinput placeholder={"Email"} />
          <Textinput placeholder={"Password"} />
          <LinkText NavigateTo="loginscreen" title="Log in" />
          <StyledButton title={"Sign up"} />
        </View>
      </View>
      <StatusBar />
    </View>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  contents: {
    /*borderColor: "black",
    borderWidth: 2,*/
    marginTop: 30,
    flex: 1,
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 100,
  },
  formStyle: {
    marginTop: 40,
    fontSize: 25,
  },
});
