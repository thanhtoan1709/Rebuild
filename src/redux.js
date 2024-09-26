// import rootReducer from "./store/reducers/rootReducer"; // Đảm bảo đường dẫn đúng
// import { createStore, applyMiddleware } from "redux";
// import { persistStore } from "redux-persist";
// import { thunk } from "redux-thunk";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { configureStore } from "@reduxjs/toolkit";
// // Cấu hình Redux Persist
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Tạo persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const reduxStore = () => {
//   const store = createStore(persistedReducer, applyMiddleware(thunk)); // Sử dụng persistedReducer
//   const persistor = persistStore(store);

//   return { store, persistor };
// };

// import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./store/reducers/userReducer";
import authReducer from "./store/reducers/authReducer";
import productReducer from "./store/reducers/productReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import cartReducer from "./components/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
// Cấu hình Redux Persist
// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel2,
// };
const commomConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  ...commomConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};
const persistedAuthReducer = persistReducer(authConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
// Cấu hình Redux Persist
