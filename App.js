import "react-native-gesture-handler";
//TODO: Create a branch for every new feature
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signupscreen from "./src/screens/Signupscreen";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";
import Welcomescreen from "./src/screens/Welcomescreen";
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

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";

function App() {
  const auth = getAuth(app);

  const [User, setUser] = React.useState(null);

  React.useEffect(() => {
    const isUserSignedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
        // console.log(User.email);
      }
    });

    return () => isUserSignedIn();
  }, []);

  const [fontsLoaded] = useFonts({
    IndieFlower: require("./src/assets/fonts/IndieFlower-Regular.ttf"),
    Poppins_200ExtraLight,
    Poppins_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();

  // function MyTabs() {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="taskscreen" component={Taskscreen} />
  //       <Tab.Screen name="taskscreen" component={Taskscreen} />
  //       <Tab.Screen name="calendarscreen" component={CalendarScreen} />
  //     </Tab.Navigator>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {User ? (
          <>
            <Stack.Screen name="taskscreen" component={Taskscreen} />
            <Stack.Screen component={Welcomescreen} name="welcomescreen" />
          </>
        ) : (
          <>
            <Stack.Screen component={Welcomescreen} name="welcomescreen" />
            <Stack.Screen name="taskscreen" component={Taskscreen} />
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
