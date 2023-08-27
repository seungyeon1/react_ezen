import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//import rootReducer from './modules'; < index.js 가 modules 디렉토리의 루트 파일이 되어 가능.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
