import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Textinput from "../components/Textinput";
import StyledButton from "../components/StyledButton";
import LinkText from "../components/LinkText";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../fireconfig/firebase";

const Signupscreen = ({ navigation }) => {
  const auth = getAuth(app);
  const [value, setValue] = useState({ username: "", email: "", password: "" });

  //callback function to handle input state
  const handleInputChnage = (name, newText) => {
    setValue({ ...value, [name]: newText });
  };

  const signup = async () => {
    if (value.email === "" || value.password === "") {
      console.error("email and password is needed");
      return;
    } else {
      try {
        await createUserWithEmailAndPassword(auth, value.email, value.password);
        navigation.navigate("tasksdrawer");
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
        });
        console.log(error.message);
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
            placeholder={"Username"}
            onChangeText={handleInputChnage}
            name="username"
            value={value.name}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <Textinput
            placeholder={"Email"}
            onChangeText={handleInputChnage}
            name="email"
            value={value.name}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <Textinput
            placeholder={"Password"}
            onChangeText={handleInputChnage}
            name="password"
            value={value.name}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <LinkText title="Log in" NavigateTo={"loginscreen"} />
          <StyledButton
            title={"Sign up"}
            backgroundColor="black"
            color={"white"}
            onPress={signup}
          />
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
