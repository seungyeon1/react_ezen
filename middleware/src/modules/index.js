import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample from "./sample";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootRedcuer = combineReducers({
  counter,
  sample,
  loading,
});

//saga
export function* rootSaga() {
  //제너레이터함수 생성
  yield all([counterSaga()]); //all 함수는 여러 saga를 합쳐주는 역할
}

export default rootRedcuer;

//import rootRedcuer from "./modules";
//단일스토어로 사용해야하지만, 비효율적이라 rootRedcuer 담아준다. 만들어준다.
