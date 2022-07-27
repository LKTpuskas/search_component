import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import searchReducer from "./reducers/searchReducer";

const reducer = {
  searchResult: searchReducer,
};

const preloadedState = {
  searchResult: {},
};

const middleware =
  process.env.NODE_ENV !== "production"
    ? [reduxImmutableStateInvariant(), thunk]
    : [thunk];

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware,
  preloadedState,
});

export default store;
