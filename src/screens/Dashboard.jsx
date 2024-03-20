import { Box, H1, H3, Text, View } from "dripsy";
import React from "react";
import { Button } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View sx={{ flex: 1, justifyContent: "center " }}>
      <Button title="Open topic" onPress={() => navigation.navigate("Topic")}>
        <Text>Open topic</Text>
      </Button>
    </View>
  );
};

export default Dashboard;
