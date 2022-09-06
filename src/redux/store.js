import { createStore } from "redux";
import { persistStore } from "redux-persist";

// import rootReducer from "./root.reducer";
import userReducer from "./auth/userReucer";

export const store = createStore(userReducer);
// export const persistor = persistStore(store);
