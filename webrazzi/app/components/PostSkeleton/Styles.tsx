import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: safeSpace,
    marginTop: safeSpace
  },
  categories: {
    height: 18,
    width: 138,
    borderRadius: 4,
    backgroundColor: themes.skeleton
  },
  title: {
    height: 36,
    borderRadius: 4,
    backgroundColor: themes.skeleton
  },
  title1: {
    marginTop: safeSpace
  },
  title2: {
    marginTop: 4
  },
  title3: {
    marginTop: 4,
    width: 196
  },
  summary: {
    height: 28,
    borderRadius: 4,
    backgroundColor: themes.skeleton
  },
  summary1: {
    marginTop: safeSpace
  },
  summary2: {
    marginTop: 4
  },
  summary3: {
    marginTop: 4,
    width: 256
  },
  image: {
    marginTop: safeSpace,
    height: 196,
    borderRadius: 4,
    backgroundColor: themes.skeleton
  },
  text: {
    height: 22,
    borderRadius: 4,
    backgroundColor: themes.skeleton
  },
  text1: {
    marginTop: safeSpace
  },
  text2: {
    marginTop: 4
  },
  text3: {
    marginTop: 4,
    width: 256
  },
  text4: {
    marginTop: 4,
    width: 138
  }
});
