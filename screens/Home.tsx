import { Button } from "react-native";
import React from "react";
import { H1, Text, View } from "dripsy";
import { NavigationProp } from "@react-navigation/native";

type Props = { navigation: NavigationProp<any> };

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <H1>Acdemic AI</H1>

      <Button title="Start" onPress={() => navigation.navigate("Sample")}>
        <Text>Start</Text>
      </Button>
    </View>
  );
};

export default Home;
