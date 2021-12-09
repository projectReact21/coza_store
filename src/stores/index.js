import { loadingBarReducer } from "react-redux-loading-bar";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
});
const store = createStore(rootReducer);
export default store;
