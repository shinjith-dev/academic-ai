import { Box, Text, View } from "dripsy";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Stats = () => {
  return (
    <View
      sx={{
        height: 280,
        width: "100%",
        backgroundColor: "#e9ecef",
        p: 20,
        gap: 16,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 20,
          borderRadius: 25,
          borderWidth: 1,
          padding: 6,
          borderColor: "#151515",
        }}
      >
        <Ionicons name="notifications" size={24} color="#151515" />

        <Box
          sx={{
            backgroundColor: "blue",
            width: 10,
            height: 10,
            borderRadius: 25,
            position: "absolute",
            top: 8,
            right: 8,
            borderWidth: 1,
            borderColor: "#e9ecef",
          }}
        />
      </Box>

      <Box>
        <Box sx={{ flexDirection: "row", alignItems: "baseline", gap: 1 }}>
          <Text sx={{ fontSize: 92, fontWeight: 700 }}>38</Text>
          <Text sx={{ fontSize: 20, fontWeight: 700 }}>%</Text>
        </Box>

        <Text sx={{ fontSize: 18, fontWeight: 500, color: "dimgray" }}>
          Covered for next assessment
        </Text>
      </Box>

      <Box sx={{ flexDirection: "row" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Text sx={{ fontSize: 48, fontWeight: 700 }}>5</Text>

          <Text sx={{ fontSize: 18, fontWeight: 500, color: "dimgray" }}>
            Skipped topics
          </Text>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flexDirection: "row", alignItems: "baseline", gap: 1 }}>
            <Text sx={{ fontSize: 48, fontWeight: 700 }}>20</Text>
            <Text sx={{ fontSize: 20, fontWeight: 700 }}>%</Text>
          </Box>

          <Text sx={{ fontSize: 18, fontWeight: 500, color: "dimgray" }}>
            Syllabus coverage
          </Text>
        </Box>
      </Box>
    </View>
  );
};

export default Stats;
