import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  list: {
    marginTop: safeSpace * -2,
    gap: safeSpace
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)",
    padding: safeSpace - 2,
    marginHorizontal: safeSpace
  },
  categories: {
    color: themes.gray800,
    fontFamily: "Inter-SemiBold",
    fontSize: 12
  },
  section: {
    flexDirection: "row",
    gap: safeSpace / 2,
    marginTop: safeSpace / 2
  },
  title: {
    flex: 1,
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 17,
    lineHeight: 23
  },
  image: {
    width: 96,
    height: 54,
    resizeMode: "contain"
  },
  excerpt: {
    color: themes.gray,
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 20,
    marginTop: safeSpace / 2
  }
});
