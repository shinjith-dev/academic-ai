import { Box, H2, ScrollView, Text, View } from "dripsy";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SecondaryButton from "../components/common/SecondaryButton";
import { GEMINI_API_KEY } from "../../lib/config";
import StopwatchButton from "../components/topic/StopwatchButton";
import FAB from "../components/common/FAB";
import Markdown, { MarkdownIt } from "react-native-markdown-display";
import markdownItKatex from "@iktakahiro/markdown-it-katex";
import markdownItMath from "markdown-it-math";
import markdownItMathJax3 from "markdown-it-mathjax3";
import { ActivityIndicator } from "react-native";

const markdownItInstance = MarkdownIt({ typographer: true })
  .use(markdownItKatex)
  .use(markdownItMathJax3);

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const Topic = ({ route, navigation }) => {
  const topic = route.params;
  const [description, setDesc] = useState("");
  const [stopwatch, setStopwatch] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = topic.Task ?? "";

    model
      .generateContent(prompt)
      .then((result) => result.response)
      .then((res) => {
        setDesc(res.text());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View sx={{ flex: 1, p: 12, position: "relative" }}>
      <Box sx={{ mb: 8, flex: 1 }}>
        <H2>{topic.Task}</H2>
        <Box sx={{ gap: 4, flexDirection: "row", alignItems: "center", mb: 4 }}>
          <AntDesign name="star" size={14} color="#2b8a3e" />
          <Text sx={{ color: "green", fontWeight: "medium" }}>
            Important topic
          </Text>
          <Text sx={{ fontWeight: "bold" }}> - {topic.Subject}</Text>
        </Box>

        <ScrollView>
          {isLoading && (
            <Box sx={{ py: 16 }}>

              <ActivityIndicator size="large" color="#3b5bdb" />
            </Box>
          )}
          <Markdown markdownit={markdownItInstance}>{description}</Markdown>
        </ScrollView>
        <FAB>
          <AntDesign name="staro" size={16} color="green" />
        </FAB>
      </Box>
      <Box sx={{ my: 8 }}>
        <StopwatchButton updateStatus={(status) => setStopwatch(status)} />
      </Box>
      {!stopwatch && (
        <>
          <Box sx={{ gap: 6, flexDirection: "row" }}>
            <SecondaryButton title="Skip this topic" style={{ flexGrow: 1 }}>
              <Text>Skip this topic</Text>
            </SecondaryButton>
            <SecondaryButton style={{ flexGrow: 1 }}>
              <Text>Mark as completed</Text>
            </SecondaryButton>
          </Box>
        </>
      )}
    </View>
  );
};

export default Topic;
