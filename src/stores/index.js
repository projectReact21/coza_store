import { loadingBarReducer } from "react-redux-loading-bar";
import { createStore, combineReducers } from "redux";
import authReducer from "./reducer/auth";
const rootReducer = combineReducers({
  auth: authReducer,
  loadingBar: loadingBarReducer,
});
const store = createStore(rootReducer);
export default store;
