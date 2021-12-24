import { combineReducers } from "redux";
import bankReducer from "./bankreducer";

const rootReducer = combineReducers({ account: bankReducer });

export default rootReducer;
