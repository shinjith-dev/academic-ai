import { H3, Text, View, useDripsyTheme } from "dripsy";
import React, { useEffect, useState } from "react";
import Topics from "../components/dashboard/Topics";
import Stats from "../components/dashboard/Stats";
import storage from "../../lib/storage";

const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    storage
      .load({
        key: "loginUser",
      })
      .then((ret) => {
        // found data go to then()
        console.log(ret.username);
        setUsername(ret.username);
      })
      .catch((err) => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            // TODO;
            break;
          case "ExpiredError":
            // TODO
            break;
        }
      });
  }, []);

  return (
    <View sx={{ flex: 1, justifyContent: "center " }}>
      <Stats username={username} />
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
