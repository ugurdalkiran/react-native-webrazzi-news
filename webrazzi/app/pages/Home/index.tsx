import React, { memo, useEffect, useState } from "react";
import {
  StatusBar,
  View,
  BackHandler,
  Alert,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import { MMKV } from "react-native-mmkv";
import Header from "components/Header";
import Highlights from "components/Highlights";
import List from "components/List";
import MoreButton from "components/MoreButton";
import { useGlobalState, GlobalStateProps } from "support/useGlobalState";
import { themes } from "support/Themes";
import { API_URL, PostsProps } from "support/Utils";
import { styles } from "./Styles";

export const storage = new MMKV();

// Component Interface
interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  const [globalState, dispatch]: [GlobalStateProps, any] = useGlobalState();

  const [data, setData] = useState<{
    highlights: PostsProps[];
    recents: PostsProps[];
  }>({
    highlights: [],
    recents: []
  });
  const [nextLink, setNextLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const storageBookmarks = storage.getString("bookmarks");
    if (storageBookmarks !== undefined) {
      dispatch({
        type: "changeBookmarks",
        value: JSON.parse(storageBookmarks)
      });
    }

    init();

    BackHandler.addEventListener("hardwareBackPress", _backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", _backAction);
    };
  }, []);

  const _backAction = () => {
    Alert.alert("Uygulamayı Kapat", "Kapatmak istediğinize emin misiniz?", [
      { text: "Vazgeç", onPress: () => null, style: "cancel" },
      { text: "Uygulamayı Kapat", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  const init = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        setData({
          highlights: res.data.slice(0, 5),
          recents: res.data.slice(5)
        });
        setNextLink(res.links.next);

        setTimeout(() => {
          SplashScreen.hide();
        }, 120);
      });
  };

  const handleMore = () => {
    setLoading(true);
    fetch(nextLink)
      .then(res => res.json())
      .then(res => {
        setData({
          ...data,
          recents: [...data.recents, ...res.data]
        });
        setNextLink(res.links.next);
        setLoading(false);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        setData({
          highlights: res.data.slice(0, 5),
          recents: res.data.slice(5)
        });
        setNextLink(res.links.next);
        setRefreshing(false);
      });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#010101" />
      <View style={styles.flex1}>
        <Header navigation={navigation} type="home" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[themes.yellow]}
            />
          }>
          <Highlights navigation={navigation} data={data.highlights} />
          <List navigation={navigation} data={data.recents} />
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size={32} color="#c7d0e0" />
            </View>
          ) : (
            <MoreButton onPress={handleMore} />
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default memo(Home);
