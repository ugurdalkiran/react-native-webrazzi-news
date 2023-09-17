import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  flex1: { flex: 1, backgroundColor: themes.background },
  search: {
    backgroundColor: themes.yellow,
    padding: safeSpace,
    paddingBottom: safeSpace + 24
  },
  h1: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 20
  },
  scrollView: {
    paddingBottom: safeSpace
  },
  inputContainer: {
    marginHorizontal: safeSpace,
    marginTop: -24
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    color: themes.black,
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
    paddingLeft: 56,
    paddingRight: safeSpace,
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)"
  },
  searchIcon: {
    position: "absolute",
    top: 12,
    left: safeSpace
  },
  results: {
    marginTop: safeSpace * 3
  },
  empty: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)",
    padding: safeSpace - 2,
    marginHorizontal: safeSpace,
    marginTop: safeSpace
  },
  emptyText: {
    color: themes.gray,
    fontFamily: "Inter-Medium",
    fontSize: 14,
    textAlign: "center"
  }
});
