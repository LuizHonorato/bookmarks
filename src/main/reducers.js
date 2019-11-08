import { combineReducers } from "redux";
import bookmarks from "../bookmark/bookmarkReducer";

const rootReducer = combineReducers({
  bookmarks
});

export default rootReducer;
