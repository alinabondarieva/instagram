import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import authorReducer from "./authorReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
comments: commentsReducer,
author: authorReducer,
posts: postReducer
});

export default rootReducer;