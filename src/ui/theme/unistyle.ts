import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints } from "./breakpoints";
import { defaultTheme } from "./default-theme";

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  default: typeof defaultTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    default: defaultTheme,
  })
  // .addThemes({
  //   light: lightTheme,
  //   dark: darkTheme,
  //   // register other themes with unique names
  // })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
