//imports
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import userReducer from "./auth/userReucer";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
//imports

//persisit state in storage
const persistConfig = {
  key: "root",
  storage: storageSession,
};
//persisit state in storage

//create persisted reducer 
const persistedReducer = persistReducer(persistConfig, userReducer);
//create persisted reducer 

//create and configure store
export const store = configureStore({
  reducer: persistedReducer,
});
//create and configure store

export const persistor = persistStore(store);
