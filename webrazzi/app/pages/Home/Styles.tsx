import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  flex1: { flex: 1, backgroundColor: themes.background },
  scrollView: {
    paddingBottom: safeSpace
  },
  loading: {
    marginHorizontal: safeSpace,
    marginTop: safeSpace,
    height: 46,
    justifyContent: "center"
  }
});
