import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// cấu hình cho persist
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const commomConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  ...commomConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});
export default rootReducer;
