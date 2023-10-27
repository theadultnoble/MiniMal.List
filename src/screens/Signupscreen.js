import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { React, useState } from "react";
=======
import { StyleSheet, Text, View } from "react-native";
import { React } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
>>>>>>> parent of 1204bd0 (add ons)
import Textinput from "../components/Textinput";
import StyledButton from "../components/StyledButton";
import LinkText from "../components/LinkText";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../fireconfig/firebase";

const Signupscreen = ({ navigation }) => {
  const auth = getAuth(app);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  //callback function to handle state
  const handleInputChnage = (name, newText) => {
    setValue({ ...value, [name]: newText });
  };

  const signup = async () => {
    if (value.email === "" || value.password === "") {
      console.error("email and password is needed");
      return;
    } else {
      try {
        await createUserWithEmailAndPassword(
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

<<<<<<< HEAD
=======
const Signupscreen = () => {
  const [fontsLoaded] = useFonts({
    IndieFlower: require("../assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

>>>>>>> parent of 1204bd0 (add ons)
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={{ fontSize: 40, fontFamily: "IndieFlower" }}>
          Welcome to
        </Text>
        <Text style={{ fontSize: 40, fontFamily: "IndieFlower" }}>
          MiniMal-List
        </Text>
        <View style={styles.formStyle}>
<<<<<<< HEAD
          <Textinput
            name="username"
            value={value.name}
            placeholder={"Username"}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={handleInputChnage}
          />
          <Textinput
            name="email"
            value={value.name}
            placeholder={"Email"}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={handleInputChnage}
          />
          <Textinput
            name="password"
            value={value.name}
            placeholder={"Password"}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={handleInputChnage}
          />
          <LinkText NavigateTo="loginscreen" title="Log in" />
          <Pressable style={styles.ButtonStyle} onPress={signup}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "IndieFlower",
                color: "black",
              }}
            >
              Sign up
            </Text>
          </Pressable>
=======
          <Textinput placeholder={"Username"} />
          <Textinput placeholder={"Email"} />
          <Textinput placeholder={"Password"} />
          <LinkText title="Log in" />
          <StyledButton title={"Sign up"} />
>>>>>>> parent of 1204bd0 (add ons)
        </View>
        {!!value.error && (
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        )}
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
  ButtonStyle: {
    borderRadius: 5,
    borderColor: "#A3A3A3",
    borderWidth: 1,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "white",
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});
