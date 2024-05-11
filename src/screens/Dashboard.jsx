import { H3, Text, View, useDripsyTheme } from "dripsy";
import React from "react";
import Topics from "../components/dashboard/Topics";
import Stats from "../components/dashboard/Stats";

const Dashboard = ({ navigation }) => {
  const { theme } = useDripsyTheme();

  return (
    <View sx={{ flex: 1, justifyContent: "center " }}>
      <Stats />
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

      <Topics navigation={navigation} />

      {/* <Button title="Open topic" onPress={() => navigation.navigate("Topic")}>
        <Text>Open topic</Text>
      </Button> */}
    </View>
  );
};

export default Dashboard;
