import React, { memo } from "react";
import { View } from "react-native";
import WebrazziLogo from "components/WebrazziLogo";
import AnimatedButton from "components/AnimatedButton";
import * as Icons from "components/icon";
import { themes } from "support/Themes";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
  type: "home" | "other";
}

const Header = ({ navigation, type }: Props) => {
  const goBookmarks = () => {
    navigation.navigate("Bookmarks");
  };

  const goSearch = () => {
    navigation.navigate("Search");
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {type === "other" && (
        <AnimatedButton onPress={goBack}>
          <Icons.ArrowLeft width="24" height="24" stroke={themes.gray} />
        </AnimatedButton>
      )}
      <WebrazziLogo width="112" height="28" />
      {type === "home" && (
        <View style={styles.right}>
          <AnimatedButton onPress={goSearch}>
            <Icons.Search width="24" height="24" stroke={themes.gray} />
          </AnimatedButton>
          <AnimatedButton onPress={goBookmarks}>
            <Icons.Bookmark width="24" height="24" stroke={themes.gray} />
          </AnimatedButton>
        </View>
      )}
    </View>
  );
};

export default memo(Header);
