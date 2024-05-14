import { Box, Text, View } from "dripsy";
import React, { useEffect, useState } from "react";
import { getSchedules } from "../../../lib/queries/dashboard";
import { ActivityIndicator, TouchableHighlight, TouchableOpacity } from "react-native";
import { convertMins } from "../../../lib/functions/fns";
import storage from "../../../lib/storage";

// const topics = [
//   {
//     Subject: "Engineering Chemistry",
//     Task: "Electrochemical Cells and Redox Reactions",
//     StudyTime: 3,
//   },
//   {
//     Subject: "Linear Algebra and Calculus",
//     Task: "Half Range Sine and Cosine Series, Parseval’s Theorem",
//     StudyTime: 3,
//   },
//   {
//     Subject: "Engineering Chemistry",
//     Task: "Introduction to Spectroscopic Techniques and Types of Spectrum",
//     StudyTime: 3,
//   },
//   {
//     Subject: "Linear Algebra and Calculus",
//     Task: "Double Integrals (Cartesian)",
//     StudyTime: 3,
//   },
// ];

const Topics = ({ navigation }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // getSchedules()
    //   .then((data) => {
    //     console.log(data);
    //     // setTopics(data);
    //   })
    //   .catch((err) => {

    //     console.log(err);
    //   });
    storage
      .load({ key: "schedule" })
      .then((res) => {
        setTopics(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response);
        setLoading(false);
        throw new Error("Failed to fetch schedule");
      });
  }, []);

  return (
    <View sx={{ flex: 1, gap: 4 }}>
      {isLoading && (
        <Box sx={{ justifyContent: "center" }}>
          <ActivityIndicator size="large"/>
        </Box>
      )}
      {topics.map((topic) => (
        <TouchableOpacity
          key={topic.course_code}
          onPress={() => navigation.navigate("Topic", topic)}
        >
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

            <View
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{topic.Subject}</Text>
              <Text>
                {convertMins(topic.StudyTime).hours} Hrs{" "}
                {convertMins(topic.StudyTime).minutes} Mins
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Topics;
