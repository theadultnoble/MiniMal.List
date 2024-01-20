import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { React, useState } from "react";
import Textinput from "../components/Textinput";
import StyledButton from "../components/StyledButton";
import LinkText from "../components/LinkText";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../fireconfig/firebase";

const Loginscreen = ({ navigation }) => {
  const auth = getAuth(app);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  //callback function to handle input state
  const handleInputChnage = (name, newText) => {
    setValue({ ...value, [name]: newText });
  };

  const login = async () => {
    if (value.email === "" || value.password === "") {
      console.error("email and password is needed");
      return;
    } else {
      try {
        await signInWithEmailAndPassword(auth, value.email, value.password);
        navigation.navigate("taskscreen");
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
        });
        console.log(error);
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
          <Textinput
            value={value.name}
            name="email"
            placeholder={"Email"}
            onChangeText={handleInputChnage}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <Textinput
            value={value.name}
            name="password"
            placeholder={"Password"}
            onChangeText={handleInputChnage}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <LinkText NavigateTo="signupscreen" title="Sign up" />
          <StyledButton
            title={"Log in"}
            backgroundColor="black"
            color={"white"}
            onPress={login}
          />
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
