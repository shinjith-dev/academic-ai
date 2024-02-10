import { StatusBar } from "expo-status-bar";
import { DripsyProvider, H1, Text, View, makeTheme } from "dripsy";
import { Button } from "react-native";

const theme = makeTheme({});

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <View
        sx={{
          backgroundColor: "$primary",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <H1>Acdemic AI</H1>

        <Button title="Start">
          <Text>Start</Text>
        </Button>

        <StatusBar style="auto" />
      </View>
    </DripsyProvider>
  );
}
