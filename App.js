import { DripsyProvider, H1, View, makeTheme } from "dripsy";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Topic from "./src/screens/Topic";
import Login from "./src/screens/Login";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();

const theme = makeTheme({
  colors: {
    $text: "#000",
    $background: "#fff",
    $primary: "#a23c33",
    $secondary: "#eee",
  },
});

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <RootSiblingParent>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Topic" component={Topic} />
          </Stack.Navigator>
        </NavigationContainer>
      </RootSiblingParent>

      <StatusBar style="auto" />
    </DripsyProvider>
  );
}
