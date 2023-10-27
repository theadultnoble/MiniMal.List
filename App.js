import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signupscreen from "./src/screens/Signupscreen";
import Loginscreen from "./src/screens/Loginscreen";
import Taskscreen from "./src/screens/Taskscreen";

function App() {
  const Stack = createNativeStackNavigator();
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
            <Stack.Screen component={Welcomescreen} name="welcomescreen" />
            <Stack.Screen component={TasksDrawer} name="tasksdrawer" />
            <Stack.Screen component={Signupscreen} name="signupscreen" />
            <Stack.Screen component={Loginscreen} name="loginscreen" />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />;
};
