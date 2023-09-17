import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  flex1: { flex: 1, backgroundColor: themes.background },
  bookmarks: {
    backgroundColor: themes.yellow,
    padding: safeSpace,
    paddingBottom: safeSpace * 3
  },
  h1: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 20
  },
  scrollView: {
    paddingBottom: safeSpace
  },
  empty: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)",
    padding: safeSpace - 2,
    marginHorizontal: safeSpace,
    marginTop: safeSpace * -2
  },
  emptyText: {
    color: themes.gray,
    fontFamily: "Inter-Medium",
    fontSize: 14,
    textAlign: "center"
  }
});
