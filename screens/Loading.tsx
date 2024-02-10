import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const Loading = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Loading</Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to home</Button>
    </View>
  );
};

export default Loading;
