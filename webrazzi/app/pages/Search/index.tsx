import React, { memo, useEffect, useRef, useState } from "react";
import { View, Text, BackHandler, ScrollView, TextInput } from "react-native";
import Header from "components/Header";
import List from "components/List";
import * as Icons from "components/icon";
import { API_URL, PostsProps, searchText } from "support/Utils";
import { styles } from "./Styles";

// Component Interface
interface Props {
  navigation: any;
}

const Search = ({ navigation }: Props) => {
  const input = useRef<any>(null);

  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState<PostsProps[]>([]);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }

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
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        setAllData(res.data);
      });
  };

  const results = allData.filter(item =>
    searchText(item.title.toLocaleLowerCase("tr-TR")).includes(
      searchText(search.toLocaleLowerCase("tr-TR"))
    )
  );

  return (
    <View style={styles.flex1}>
      <Header navigation={navigation} type="other" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}>
        <View style={styles.search}>
          <Text style={styles.h1}>Webrazzi'de arayın</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={input}
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            placeholder="Bir şeyler arayın..."
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholderTextColor="#a5abc0"
            autoCorrect={false}
            returnKeyType="search"
          />
          <Icons.Search
            width="24"
            height="24"
            stroke="#a5abc0"
            style={styles.searchIcon}
          />
        </View>
        {allData.length !== 0 && results.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Herhangi bir içerik bulunamadı.
            </Text>
          </View>
        ) : (
          <View style={styles.results}>
            <List navigation={navigation} data={results} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default memo(Search);
