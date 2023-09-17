import React, { memo, useEffect } from "react";
import { View, Text, BackHandler, ScrollView } from "react-native";
import Header from "components/Header";
import List from "components/List";
import { useGlobalState, GlobalStateProps } from "support/useGlobalState";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
}

const Bookmarks = ({ navigation }: Props) => {
  const [globalState, dispatch]: [GlobalStateProps, any] = useGlobalState();

  useEffect(() => {
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

  return (
    <View style={styles.flex1}>
      <Header navigation={navigation} type="other" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}>
        <View style={styles.bookmarks}>
          <Text style={styles.h1}>Koleksiyona eklenenler</Text>
        </View>
        {globalState.bookmarks.length !== 0 ? (
          <List navigation={navigation} data={globalState.bookmarks} />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Koleksiyona eklenen herhangi bir içerik yok.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default memo(Bookmarks);
