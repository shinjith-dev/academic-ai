import { StatusBar } from "expo-status-bar";
import { DripsyProvider, makeTheme } from "dripsy";
import AppNavigator from "./navigation/AppNavigator";

// dripsy
const theme = makeTheme({
  // your theme
});

type MyTheme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <AppNavigator />
      <StatusBar style="auto" />
    </DripsyProvider>
  );
}
