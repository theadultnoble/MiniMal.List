import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { React, useState } from "react";
import Textinput from "../components/Textinput";
import StyledButton from "../components/StyledButton";
import LinkText from "../components/LinkText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../fireconfig/firebase";

const Loginscreen = ({ navigation }) => {
  const auth = getAuth(app);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  //callback function to handle state
  const handleInputChnage = (name, newText) => {
    setValue({ ...value, [name]: newText });
  };

  const login = async () => {
    if (value.email === "" || value.password === "") {
      console.error("email and password is needed");
      return;
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          value.email,
          value.password
        ).then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        });
        navigation.navigate("tasksdrawer");
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={{ fontSize: 40, fontFamily: "IndieFlower" }}>
          Welcome to MiniMal-List
        </Text>
        <View style={styles.formStyle}>
          <Textinput placeholder={"Email"} />
          <Textinput placeholder={"Password"} />
          <LinkText NavigateTo="loginscreen" title="Sign up" />
          <StyledButton title={"Log in"} />
        </View>
      </View>
      <StatusBar />
    </View>
  );
};

export default Loginscreen;

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
