import "react-native-gesture-handler";
//TODO: Create a branch for every new feature
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signupscreen from "./src/screens/Signupscreen";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";
import Welcomescreen from "./src/screens/Welcomescreen";
import app from "./src/fireconfig/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFonts } from "expo-font";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

function App() {
  const auth = getAuth(app);

  const [User, setUser] = React.useState(null);

  React.useEffect(() => {
    const isUserSignedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
        console.log("no user");
      }
    });
    return () => isUserSignedIn();
  }, []);

  const [fontsLoaded] = useFonts({
    IndieFlower: require("./src/assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  function TasksDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="taskscreen" component={Taskscreen} />
        <Drawer.Screen name="welcomescreen" component={Welcomescreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {User ? (
          <>
            <Stack.Screen component={Welcomescreen} name="welcomescreen" />
            <Stack.Screen component={TasksDrawer} name="tasksdrawer" />
          </>
        ) : (
          <>
            <Stack.Screen component={Loginscreen} name="loginscreen" />
            <Stack.Screen component={Signupscreen} name="signupscreen" />
            <Stack.Screen component={Welcomescreen} name="welcomescreen" />
            <Stack.Screen component={TasksDrawer} name="tasksdrawer" />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />;
};
