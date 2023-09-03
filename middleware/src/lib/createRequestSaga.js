import { call, put } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const reponse = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: reponse.data,
      }); // 요청 성공
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
