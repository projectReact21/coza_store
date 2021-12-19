import { loadingBarReducer } from "react-redux-loading-bar";
import { createStore, combineReducers } from "redux";
import authReducer from "./reducer/auth";
import blogReducer from "./reducer/blog";
const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  loadingBar: loadingBarReducer,
});
const store = createStore(rootReducer);
export default store;
