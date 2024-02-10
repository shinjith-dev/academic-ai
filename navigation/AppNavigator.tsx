import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "@/screens/Loading";
import Home from "@/screens/Home";
import Sample from "@/screens/Sample";

type Props = {};

// react-navigation
const Stack = createNativeStackNavigator();

const AppNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sample" component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
