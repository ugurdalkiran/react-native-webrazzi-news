import { StyleSheet } from "react-native";
import { safeSpace, themes, windowWidth } from "support/Themes";

export const styles = StyleSheet.create({
  highlights: {
    backgroundColor: themes.yellow,
    paddingBottom: safeSpace * 2
  },
  h1: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 20,
    marginHorizontal: safeSpace,
    marginTop: safeSpace
  },
  list: {
    paddingLeft: safeSpace / 2
  },
  itemWrapper: {
    paddingVertical: safeSpace,
    paddingHorizontal: safeSpace / 2,
    width: windowWidth - safeSpace * 2
  },
  item: {
    borderRadius: 8,
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)",
    backgroundColor: "#fff"
  },
  image: {
    height: 158,
    width: "auto",
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  section: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: safeSpace - 2
  },
  title: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 18,
    lineHeight: 25,
    height: 74
  }
});
