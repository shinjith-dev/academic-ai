import { makeTheme } from "dripsy";

const theme = makeTheme({
  // your theme
});

type MyTheme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}
