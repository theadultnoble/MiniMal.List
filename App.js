import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signupscreen from "./src/screens/Signupscreen";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";

function App() {
  const Stack = createNativeStackNavigator();

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
