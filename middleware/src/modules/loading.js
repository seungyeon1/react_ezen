import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  //가지고있는것을 넘겨라
  (requestType) => requestType //payload: 'sample/GET_POST'
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType //payload: 'sample/GET_POST'
);

const initialState = {}; //초기화

//로딩을 handleActions발생시키면
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
