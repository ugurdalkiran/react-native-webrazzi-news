import React, { memo } from "react";
import { Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate
} from "react-native-reanimated";
import { duration } from "support/Themes";
import { styles } from "./Styles";

// Component Interface
interface Props {
  onPress: () => void;
}

const MoreButton = ({ onPress }: Props) => {
  const pressState = useSharedValue(0);

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
          scale: interpolate(pressState.value, [0, 1], [1, 0.98])
        }
      ]
    };
  });

  return (
    <Pressable
      android_disableSound
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles.pressable}>
      <Animated.View style={[styles.button, bStyle]}>
        <Text style={styles.text}>Daha Fazla Haber Göster</Text>
      </Animated.View>
    </Pressable>
  );
};

export default memo(MoreButton);
