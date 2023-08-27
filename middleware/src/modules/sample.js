import { handleActions } from "redux-actions";
import * as api from "../lib/api";

//애션 타입을 선언한다.
//한 요청당 세개를 만들어야 한다.

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//dispatch 비동기 하는법  thunk 함수를 생성한다.
//thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); //요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); //요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); //error발생
    throw e; //나중에 컴포넌트단에서 에러를 조회할 수 있게 해줌
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); //요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }); //요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    }); //error발생
    throw e; //나중에 컴포넌트단에서 에러를 조회할 수 있게 해줌
  }
};

//초기 상태를 선언한다.
//요청의 로딩 중 상태는 loading 이라는 객체에서 관리한다.
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null, //처음에 데이터가 없어야한다. 기존의 데이터를 비워줘야 한다. undefined 가 아니라!
  user: null,
};
const sample = handleActions(
  {
    //상태값이 기존 값을 복사해서 로딩의변수를 기존의 로딩상태값과 GET_POST 값
    [GET_POST]: (state) => ({
      ...state, //기존 상태값 복사
      loading: {
        //로딩의 상태 값 복사
        ...state.loading, //기존 로딩상태값 즉 false값이 나온다.
        GET_POST: true, //요청시작 ture로 변경하자
      },
    }),
    //action : 데이터값
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading, //true값이다.
        GET_POST: false, //요청완료 , 다시false로 변경하자
      },
      //payload : 데이터를 한꺼번에 담는다!!
      post: action.payload, //action반환 한다. (sample.js 에 {post.title}, {post.body} 값으로 사용할수있다.)
    }),
    //GET_POST_FAILURE일때는 action값(데이터값)이 필요없다.
    [GET_POST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //요청 완료
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true, //요청시작
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, //요청완료
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, //요청 완료
      },
    }),
  },
  initialState
);

export default sample;
