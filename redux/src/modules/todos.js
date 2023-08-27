import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const CHANGE_INPUT = "todos/CHANGE_INPUT"; // "모듈명/액션명"
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
// redux-actions 변환
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });
//
// redux-actions 변환
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });
//
// redux-actions 변환
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo), // immer 라이브러리가 없음으로 불변성을 위해 .concat을 씀
//       };
//     case TOGGLE:
//       return {
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }
//
// redux-actions 변환
// const todos = handleActions(
//   {
//     // action.payload 안에 포함 (action.id , action.input 등)
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState
// );
// redux-actions / immer
const todos = handleActions(
  {
    // action.payload = action.id, action.todo
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
