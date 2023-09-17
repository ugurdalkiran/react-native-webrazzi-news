import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: safeSpace,
    marginTop: safeSpace
  },
  button: {
    backgroundColor: themes.yellow,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "rgba(76,69,26, 0.38)",
    alignItems: "center",
    paddingVertical: 12
  },
  text: {
    color: themes.yellowDark,
    fontFamily: "Inter-SemiBold",
    fontSize: 15
  }
});
