import { combineReducers } from "redux";
import counter from "./counter";
import newcounter from "./newcounter";

const rootReducer = combineReducers({ counter, newcounter });

export default rootReducer;
