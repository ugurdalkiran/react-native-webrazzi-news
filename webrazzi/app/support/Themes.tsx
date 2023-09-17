import { StatusBar, Dimensions } from "react-native";

// Inter ✦ Light • Regular • Medium • SemiBold • Bold

export const windowWidth = Dimensions.get("window").width;
export const statusBarHeight =
  typeof StatusBar.currentHeight === "number" ? StatusBar.currentHeight : 0;

export const duration = 160;
export const safeSpace = 20;

export const themes = {
  background: "#edf0f5",
  black: "#19191a",
  gray: "#525659",
  gray800: "#7a8085",
  gray400: "#b6b7b9",
  yellow: "#f3d02e",
  yellowDark: "#4d451a",
  ripple: "#eeeff1",
  link: "#b4960a",
  skeleton: "#dbe1eb"
};
