import { StyleSheet } from "react-native";
import { safeSpace, themes } from "support/Themes";

export const styles = StyleSheet.create({
  flex1: { flex: 1, backgroundColor: themes.background },
  scrollView: {
    paddingBottom: safeSpace
  },
  post: {
    marginHorizontal: safeSpace,
    marginTop: safeSpace
  },
  categories: {
    color: themes.gray800,
    fontFamily: "Inter-SemiBold",
    fontSize: 12
  },
  title: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 26,
    lineHeight: 35,
    marginTop: safeSpace / 2
  },
  summary: {
    marginTop: safeSpace / 2,
    fontFamily: "Inter-Regular",
    color: themes.gray,
    fontSize: 18,
    lineHeight: 27
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: safeSpace,
    gap: safeSpace / 2
  },
  avatarCircle: {
    borderWidth: 2,
    borderColor: themes.yellow,
    borderRadius: 42,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 34,
    resizeMode: "cover"
  },
  authorTexts: {
    flexDirection: "column"
  },
  authorFullName: {
    color: themes.gray,
    fontFamily: "Inter-SemiBold",
    fontSize: 14
  },
  fromNow: {
    color: themes.gray800,
    fontFamily: "Inter-Regular",
    fontSize: 14
  },
  bigImageContainer: {
    elevation: 6,
    shadowColor: "rgba(0,0,0, 0.44)",
    borderRadius: 4,
    marginTop: safeSpace
  },
  bigImage: {
    height: 196,
    width: "auto",
    resizeMode: "cover",
    borderRadius: 4
  },
  contentP: {
    fontFamily: "Inter-Regular",
    color: themes.gray,
    fontSize: 16,
    lineHeight: 25,
    marginTop: safeSpace
  },
  strong: {
    fontFamily: "Inter-Bold",
    color: themes.black
  },
  a: {
    fontFamily: "Inter-Bold",
    color: themes.link
  },
  image1: {
    height: 196,
    width: "auto",
    resizeMode: "cover",
    borderRadius: 4,
    marginTop: safeSpace
  },
  image2: {
    marginBottom: safeSpace * -2
  },
  h2: {
    fontFamily: "Inter-Bold",
    color: themes.black,
    fontSize: 20,
    lineHeight: 29,
    marginTop: safeSpace * 2,
    marginBottom: safeSpace / -2
  },
  iframe1: {
    marginTop: safeSpace,
    marginBottom: safeSpace * -2
  },
  iframe2: {
    marginTop: safeSpace,
    marginBottom: safeSpace * -4
  },
  webView: {
    height: 216
  },
  footer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(82, 86, 89, 0.42)",
    height: 50,
    paddingHorizontal: safeSpace,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  footerText: {
    color: themes.gray,
    fontFamily: "Inter-SemiBold",
    fontSize: 14
  }
});
