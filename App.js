import "react-native-gesture-handler";
//TODO: Create a branch for every new feature
import { React, useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signupscreen from "./src/screens/Signupscreen";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import * as SplashScreen from "expo-splash-screen";
import app from "./src/fireconfig/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFonts } from "expo-font";
import {
  Poppins_200ExtraLight,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { IndieFlower_400Regular } from "@expo-google-fonts/indie-flower";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

function App() {
  const auth = getAuth(app);
  const [User, setUser] = useState(null);

  const Stack = createNativeStackNavigator();

  // Load fonts
  const [fontsLoaded] = useFonts({
    IndieFlower: require("./src/assets/fonts/IndieFlower-Regular.ttf"),
    Poppins_200ExtraLight,
    Poppins_700Bold,
    Poppins_400Regular,
  });

  useEffect(() => {
    // Retrieve user
    const isUserSignedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("no user");
      }
    });

    return () => isUserSignedIn();
  }, []);

  // useEffect(() => {
  if (fontsLoaded && User) {
    SplashScreen.hideAsync();
  } else {
    return null; // Or a loading component
  }
  // }, [fontsLoaded, User]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {User ? (
          <>
            <Stack.Screen name="taskscreen" component={Taskscreen} />
            <Stack.Screen name="profilescreen" component={ProfileScreen} />
            <Stack.Screen name="calendarscreen" component={CalendarScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="taskscreen" component={Taskscreen} />
            <Stack.Screen name="profilescreen" component={ProfileScreen} />
            <Stack.Screen name="calendarscreen" component={CalendarScreen} />

            <Stack.Screen component={Loginscreen} name="loginscreen" />
            <Stack.Screen component={Signupscreen} name="signupscreen" />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
};
