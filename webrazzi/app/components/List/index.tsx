import React, { memo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import AuthorFooter from "components/AuthorFooter";
import { themes } from "support/Themes";
import { PostsProps, writeCategories } from "support/Utils";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
  data: PostsProps[];
}

const List = ({ navigation, data }: Props) => {
  const goPost = (id: number) => {
    navigation.navigate("Post", { id });
  };

  return (
    <View style={styles.list}>
      {data.map(item => (
        <Pressable
          android_disableSound
          android_ripple={{
            color: themes.ripple
          }}
          onPress={() => {
            goPost(item.id);
          }}
          key={item.id}
          style={styles.item}>
          <Text style={styles.categories}>
            {writeCategories(item.categories)}
          </Text>
          <View style={styles.section}>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.thumbnails["size-sm"].url
              }}
            />
          </View>
          <Text style={styles.excerpt}>{item.excerpt}</Text>
          <AuthorFooter item={item} />
        </Pressable>
      ))}
    </View>
  );
};

export default memo(List);
