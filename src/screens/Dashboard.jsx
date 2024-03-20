import { H3, Text, View, useDripsyTheme } from "dripsy";
import React from "react";
import { Button } from "react-native";
import Topics from "../components/dashboard/Topics";

const Dashboard = ({ navigation }) => {
  const { theme } = useDripsyTheme();

  return (
    <View sx={{ flex: 1, justifyContent: "center " }}>
      <View
        sx={{
          height: 280,
          width: "100%",
          backgroundColor: "lightgray",
        }}
      >
        <Text>Stats</Text>
      </View>
      <View
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 8,
          flexDirection: "row",
        }}
      >
        <H3>Today's schedule</H3>

        <Text>View all &gt;</Text>
      </View>

      <Topics />

      {/* <Button title="Open topic" onPress={() => navigation.navigate("Topic")}>
        <Text>Open topic</Text>
      </Button> */}
    </View>
  );
};

export default Dashboard;
