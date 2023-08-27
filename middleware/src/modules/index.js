import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";

const rootRedcuer = combineReducers({
  counter,
  sample,
});

export default rootRedcuer;

//import rootRedcuer from "./modules";
//단일스토어로 사용해야하지만, 비효율적이라 rootRedcuer 담아준다. 만들어준다.
