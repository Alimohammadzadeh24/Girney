import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import userReducer from "./auth/userReucer";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
    key: 'root',
    storage: storageSession,
  }

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: persistedReducer
})
export const persistor  = persistStore(store);
