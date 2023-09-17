import React, { memo } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate
} from "react-native-reanimated";
import * as Icons from "components/icon";
import { themes, duration } from "support/Themes";
import { PostsProps, fromNow } from "support/Utils";
import { useGlobalState, GlobalStateProps } from "support/useGlobalState";
import { storage } from "pages/Home";
import { styles } from "./Styles";

// Component Interface
interface Props {
  item: PostsProps;
}

const AuthorFooter = ({ item }: Props) => {
  const [globalState, dispatch]: [GlobalStateProps, any] = useGlobalState();

  const pressState = useSharedValue(0);

  const isBookmarked =
    globalState.bookmarks.findIndex(bItem => bItem.id === item.id) !== -1;

  const handleBookmark = () => {
    const tempBookmarks = [...globalState.bookmarks];

    const findIndex = globalState.bookmarks.findIndex(
      bItem => bItem.id === item.id
    );

    if (findIndex === -1) {
      tempBookmarks.unshift(item);
    } else {
      tempBookmarks.splice(findIndex, 1);
    }

    storage.set("bookmarks", JSON.stringify(tempBookmarks));
    dispatch({ type: "changeBookmarks", value: tempBookmarks });
  };

  const onPressIn = () => {
    pressState.value = withTiming(1, { duration });
  };

  const onPressOut = () => {
    pressState.value = withTiming(0, { duration });
  };

  const bStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(pressState.value, [0, 1], [1, 0.88])
        }
      ]
    };
  });

  return (
    <View style={styles.footer}>
      <Icons.User stroke={themes.gray} width="18" height="18" />
      <Text style={styles.author}>{item.author.full_name}</Text>
      <View style={styles.circle} />
      <Text style={styles.fromNow}>{fromNow(item.modified_at)}</Text>
      <Pressable
        android_disableSound
        onPress={handleBookmark}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.bookmark}>
        <Animated.View style={bStyle}>
          <Icons.Bookmark
            fill={isBookmarked ? themes.gray400 : "none"}
            stroke={themes.gray400}
            width="24"
            height="24"
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default memo(AuthorFooter);
