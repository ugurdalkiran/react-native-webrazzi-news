import React, { memo } from "react";
import { View } from "react-native";
import { styles } from "./Styles";

const PostSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categories} />
      <View style={[styles.title, styles.title1]} />
      <View style={[styles.title, styles.title2]} />
      <View style={[styles.title, styles.title3]} />
      <View style={[styles.summary, styles.summary1]} />
      <View style={[styles.summary, styles.summary2]} />
      <View style={[styles.summary, styles.summary3]} />
      <View style={styles.image} />
      <View style={[styles.text, styles.text1]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text3]} />
      <View style={[styles.text, styles.text1]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text2]} />
      <View style={[styles.text, styles.text4]} />
    </View>
  );
};

export default memo(PostSkeleton);
