import React, { createContext, useReducer, useContext } from "react";
import { PostsProps } from "support/Utils";

export interface GlobalStateProps {
  bookmarks: Array<PostsProps>;
}

export const initialState: GlobalStateProps = {
  bookmarks: []
};

export const reducer = (state: any, action: any) => {
  if (action.type === "changeBookmarks") {
    return Object.assign({}, state, { bookmarks: action.value });
  }
  return state;
};

const StateContext = createContext<any>(null);

export const Provider = ({ children, reducer, initialState }: any) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);
