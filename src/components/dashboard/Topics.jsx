import { Text, View } from "dripsy";
import React, { useEffect, useState } from "react";
import { getSchedules } from "../../../lib/queries/dashboard";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getSchedules()
      .then((data) => {
        console.log(data);
        setTopics(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View sx={{ flex: 1, gap: 4 }}>
      {topics.map((topic) => (
        <View
          sx={{
            p: 8,
            mb: 2,
            gap: 2,
            backgroundColor: "lightgray",
            borderRadius: 4,
            mx: 8,
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>{topic.Task}</Text>

          <View sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>{topic.Subject}</Text>
            <Text>{topic.StudyTime} Hrs</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Topics;
