import { StyleSheet } from "react-native";
import { safeSpace } from "support/Themes";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(82, 86, 89, 0.42)",
    height: 50,
    paddingHorizontal: safeSpace,
    alignItems: "center"
  },
  right: {
    marginLeft: "auto",
    flexDirection: "row",
    gap: safeSpace
  }
});
