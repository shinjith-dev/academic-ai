import { Text, View } from "dripsy";
import React, { useEffect, useState } from "react";
import { getSchedules } from "../../../lib/queries/dashboard";
import { TouchableHighlight, TouchableOpacity } from "react-native";

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
              <Text>{topic.StudyTime} Hrs</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Topics;
