import { Box, H2, ScrollView, Text, View } from "dripsy";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native";
import SecondaryButton from "../components/common/SecondaryButton";
import { MarkdownView } from "react-native-markdown-view";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAw58IJOzBoPTQOCzEH0Mtm4GACc8bR7Zw");

// ...

// ...

// const secondaryButton = {{back}}

const Topic = ({ route, navigation }) => {
  const topic = route.params;
  const [description, setDesc] = useState("");

  useEffect(() => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = topic.Task ?? "";

    model
      .generateContent(prompt)
      .then((result) => result.response)
      .then((res) => setDesc(res.text()))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(topic);

  return (
    <View sx={{ flex: 1, p: 8 }}>
      <H2>{topic.Task}</H2>
      <View sx={{ flex: 1 }}>
        <Box sx={{ gap: 4, flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="star" size={14} color="green" />
          <Text sx={{ color: "green", fontWeight: "medium" }}>
            Important topic
          </Text>
          <Text sx={{ fontWeight: "bold" }}> - {topic.Subject}</Text>
        </Box>

        <ScrollView sx={{my:4}}>
          <MarkdownView>{description}</MarkdownView>
        </ScrollView>
      </View>
      <Box sx={{ gap: 6 }}>
        <SecondaryButton title="Skip this topic">
          <AntDesign name="staro" size={14} color="black" />{" "}
          <Text>Mark as important</Text>
        </SecondaryButton>
        <SecondaryButton title="Skip this topic">
          <Text>Skip this topic</Text>
        </SecondaryButton>
        <Button title="Mark as completed">
          <Text>Mark as completed</Text>
        </Button>
      </Box>
    </View>
  );
};

export default Topic;
