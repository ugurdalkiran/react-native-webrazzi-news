import React, { memo, ReactElement } from "react";
import { Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate
} from "react-native-reanimated";
import { duration } from "support/Themes";

// Component Interface
interface Props {
  children: ReactElement;
  scale?: number;
  onPress: () => void;
}

const AnimatedButton = ({ children, scale = 0.88, onPress }: Props) => {
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
          scale: interpolate(pressState.value, [0, 1], [1, scale])
        }
      ]
    };
  });

  return (
    <Pressable
      android_disableSound
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={bStyle}>{children}</Animated.View>
    </Pressable>
  );
};

export default memo(AnimatedButton);
