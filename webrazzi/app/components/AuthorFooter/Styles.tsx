import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: safeSpace - 2
  },
  author: {
    color: themes.gray,
    fontFamily: "Inter-SemiBold",
    fontSize: 14
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#dbdcdf",
    top: 1
  },
  fromNow: {
    color: themes.gray800,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    top: 1
  },
  bookmark: {
    position: "absolute",
    right: 0,
    bottom: 0
  }
});
