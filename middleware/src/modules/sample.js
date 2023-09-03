import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga"; //리팩토링

// 액션 타입을 선언한다.
// 한 요청당 세개를 만들어야 한다.

// 액션 객체
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

//createRequestSaga 리팩토링
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null, //기존에 데이터가 있기 때문에 초기화 해줌
  users: null, //기존에 데이터가 있기 때문에 초기화 해줌
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
