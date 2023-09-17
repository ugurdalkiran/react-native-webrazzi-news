import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { reducer, initialState, Provider } from "support/useGlobalState";

const Stack = createNativeStackNavigator();

import Home from "pages/Home";
import Bookmarks from "pages/Bookmarks";
import Search from "pages/Search";
import Post from "pages/Post";

const Start = () => {
  return (
    <Provider reducer={reducer} initialState={initialState}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bookmarks" component={Bookmarks} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Post" component={Post} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default Start;
