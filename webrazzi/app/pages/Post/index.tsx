import React, { memo, useEffect, useState, Fragment } from "react";
import {
  View,
  Text,
  BackHandler,
  ScrollView,
  Image,
  Linking,
  Share
} from "react-native";
import { WebView } from "react-native-webview";
import Header from "components/Header";
import PostSkeleton from "components/PostSkeleton";
import AnimatedButton from "components/AnimatedButton";
import * as Icons from "components/icon";
import HTMLParser from "support/html-to-json";
import { themes } from "support/Themes";
import { useGlobalState, GlobalStateProps } from "support/useGlobalState";
import { PostProps, API_URL, writeCategories, formatDate } from "support/Utils";
import { storage } from "pages/Home";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
  route: any;
}

const Post = ({ navigation, route }: Props) => {
  const id: number = route.params.id;

  const [globalState, dispatch]: [GlobalStateProps, any] = useGlobalState();

  const [item, setItem] = useState<PostProps | null>(null);
  const [jsonContent, setJsonContent] = useState<Array<any> | null>(null);

  useEffect(() => {
    init();

    BackHandler.addEventListener("hardwareBackPress", _backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", _backAction);
    };
  }, []);

  const _backAction = () => {
    goBack();
    return true;
  };

  const goBack = () => {
    navigation.goBack();
  };

  const init = () => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(res => {
        setItem(res);
        writeContent(res.content);
      });
  };

  const writeContent = async (content: string) => {
    if (content.startsWith("<p>")) {
      content = `<div class="single-post-content">${content}</div>`;
    }

    const result: any = await HTMLParser(content);
    setJsonContent(result.content);
  };

  const handleLinkPress = async (link: string) => {
    await Linking.openURL(link);
  };

  const writeH2 = (p: any) => {
    return p.type === "h2" && <Text style={styles.h2}>{p.content}</Text>;
  };

  const writeIframe1 = (p: any) => {
    return (
      p.type === "p" &&
      p.content[0].type === "div" &&
      p.content[0].content[0].type === "iframe" && (
        <View style={styles.iframe1}>
          <WebView
            style={styles.webView}
            source={{
              uri: p.content[0].content[0].attributes.src
            }}
          />
        </View>
      )
    );
  };

  const writeIframe2 = (p: any) => {
    return (
      p.type === "p" &&
      p.content[1] &&
      p.content[1].content &&
      p.content[1].content[0] &&
      p.content[1].content[0].content &&
      p.content[1].content[0].content[0] &&
      p.content[1].content[0].content[0].type === "iframe" && (
        <View style={styles.iframe2}>
          <WebView
            style={styles.webView}
            source={{
              uri: p.content[1].content[0].content[0].attributes.src
            }}
          />
        </View>
      )
    );
  };

  const writeImg1 = (p: any) => {
    return (
      p.type === "p" &&
      p.content[0].type === "img" && (
        <Image
          style={styles.image1}
          source={{
            uri: p.content[0].attributes["data-src"]
          }}
        />
      )
    );
  };

  const writeImg2 = (p: any) => {
    return (
      p.type === "p" &&
      p.content[0].type === "strong" &&
      p.content[0].content[0].type === "img" && (
        <Image
          style={[styles.image1, styles.image2]}
          source={{
            uri: p.content[0].content[0].attributes["data-src"]
          }}
        />
      )
    );
  };

  const writeP = (p: any) => {
    return (
      p.type === "p" &&
      p.content[0].type !== "img" && (
        <Text style={styles.contentP}>
          {p.content.map((pm: any, pmIndex: number) => (
            <Fragment key={pmIndex}>
              {typeof pm === "string" && <Text>{pm}</Text>}
              {typeof pm === "object" && (
                <>
                  {pm.type === "strong" && (
                    <>
                      {typeof pm.content === "string" ||
                      typeof pm.content[0] === "string" ? (
                        <Text style={styles.strong}>
                          {typeof pm.content === "string" && pm.content}
                          {typeof pm.content[0] === "string" && pm.content[0]}
                          {typeof pm.content[0].content === "string" &&
                            pm.content[0].content}
                        </Text>
                      ) : (
                        <Text
                          onPress={() => {
                            handleLinkPress(pm.content[0].attributes.href);
                          }}
                          style={styles.a}>
                          {typeof pm.content[0].content === "string" &&
                            pm.content[0].content}
                        </Text>
                      )}
                    </>
                  )}
                  {pm.type === "a" && (
                    <Text
                      onPress={() => {
                        handleLinkPress(pm.attributes.href);
                      }}
                      style={styles.a}>
                      {typeof pm.content === "string" && pm.content}
                      {typeof pm.content[0] === "string" && pm.content[0]}
                      {typeof pm.content[0].content === "string" &&
                        pm.content[0].content}
                      {pm.content[0].content &&
                        typeof pm.content[0].content[0] === "string" &&
                        pm.content[0].content[0]}
                    </Text>
                  )}
                </>
              )}
            </Fragment>
          ))}
        </Text>
      )
    );
  };

  const share = async () => {
    if (item) {
      const message = `${item.title}
    
${item.url}`;

      await Share.share({ message });
    }
  };

  const isBookmarked = item
    ? globalState.bookmarks.findIndex(bItem => bItem.id === item.id) !== -1
    : false;

  const handleBookmark = () => {
    if (item) {
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
    }
  };

  return (
    <View style={styles.flex1}>
      <Header navigation={navigation} type="other" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}>
        {item === null || jsonContent === null ? (
          <PostSkeleton />
        ) : (
          <View style={styles.post}>
            <Text style={styles.categories}>
              {writeCategories(item.categories)}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
            <View style={styles.author}>
              <View style={styles.avatarCircle}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: item.author.avatar
                  }}
                />
              </View>
              <View style={styles.authorTexts}>
                <Text style={styles.authorFullName}>
                  {item.author.full_name}
                </Text>
                <Text style={styles.fromNow}>
                  {formatDate(item.modified_at)}
                </Text>
              </View>
            </View>
            <View style={styles.bigImageContainer}>
              <Image
                style={styles.bigImage}
                source={{
                  uri: item.thumbnails["size-md"].url
                }}
              />
            </View>
            <View>
              {jsonContent.map((p: any, pIndex: number) => (
                <Fragment key={pIndex}>
                  {typeof p === "object" && (
                    <>
                      {writeH2(p)}
                      {writeIframe1(p)}
                      {writeIframe2(p)}
                      {writeImg1(p)}
                      {writeImg2(p)}
                      {writeP(p)}
                    </>
                  )}
                </Fragment>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      {item !== null && (
        <View style={styles.footer}>
          <AnimatedButton onPress={share} scale={0.92}>
            <View style={styles.footerItem}>
              <Icons.Share width="24" height="24" stroke={themes.gray} />
              <Text style={styles.footerText}>Paylaş</Text>
            </View>
          </AnimatedButton>
          <AnimatedButton onPress={handleBookmark} scale={0.92}>
            <View style={styles.footerItem}>
              <Text style={styles.footerText}>
                {isBookmarked ? "Koleksiyondan Çıkar" : "Koleksiyona Ekle"}
              </Text>
              <Icons.Bookmark
                fill={isBookmarked ? themes.gray : "none"}
                width="24"
                height="24"
                stroke={themes.gray}
              />
            </View>
          </AnimatedButton>
        </View>
      )}
    </View>
  );
};

export default memo(Post);
