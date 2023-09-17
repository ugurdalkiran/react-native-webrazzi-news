import React, { memo } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import AuthorFooter from "components/AuthorFooter";
import { safeSpace, themes, windowWidth } from "support/Themes";
import { PostsProps } from "support/Utils";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
  data: PostsProps[];
}

const Highlights = ({ navigation, data }: Props) => {
  const goPost = (id: number) => {
    navigation.navigate("Post", { id });
  };

  return (
    <View style={styles.highlights}>
      <Text style={styles.h1}>Öne çıkanlar</Text>
      <ScrollView
        style={styles.list}
        snapToInterval={windowWidth - safeSpace * 2}
        horizontal
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        overScrollMode="never">
        {data.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.itemWrapper,
              { marginRight: index === 4 ? safeSpace : 0 }
            ]}>
            <Pressable
              android_disableSound
              android_ripple={{
                color: themes.ripple
              }}
              onPress={() => {
                goPost(item.id);
              }}
              style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: item.thumbnails["size-md"].url
                }}
              />
              <View style={styles.section}>
                <Text style={styles.title} numberOfLines={3}>
                  {item.title}
                </Text>
                <AuthorFooter item={item} />
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(Highlights);
