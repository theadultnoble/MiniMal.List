import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";
import Signupscreen from "./src/screens/Signupscreen";
import { useFonts } from "expo-font";

function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    IndieFlower: require("./src/assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Signupscreen} name="signupscreen" />
        <Stack.Screen component={Loginscreen} name="loginscreen" />
        <Stack.Screen component={Taskscreen} name="taskscreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />;
};
