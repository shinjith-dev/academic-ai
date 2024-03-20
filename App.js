import { DripsyProvider, H1, View, makeTheme } from "dripsy";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/screens/Dashboard";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Topic from "./src/screens/Topic";


const Stack = createNativeStackNavigator();

const theme = makeTheme({});

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Topic" component={Topic } />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </DripsyProvider>
  );
}
