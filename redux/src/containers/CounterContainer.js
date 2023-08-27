// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter"; //UI
import { decrease, increase } from "../modules/counter"; //모듈 연결의 변수 연결
import React, { useCallback } from "react";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     // modules counter.js 연결
//     dispatch(increase());
//   },
//   decrease: () => {
//     // modules counter.js 연결
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 줄 11 ~ 26 : 간소화 1
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   })
// )(CounterContainer);

// 줄 28 ~ 41 : 간소화 2
// export default connect(
//   // 상태
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // 액션
//   { increase, decrease }
// )(CounterContainer);

// connect 함수 대신 connect hook 사용 방법
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch(); //connect 함수 대신 hook 업데이트
  //객체 만든 이유 : 공간을 만들었다.
  const onIncrease = useCallback(() => dispatch(increase(), [dispatch])); //dispatch만 업데이트
  const onDecrease = useCallback(() => dispatch(decrease(), [dispatch]));

  // 리랜더링이 되므로 아래 useCallback 사용해보자 최적화 해주기
  // return (
  //   <Counter
  //     number={number}
  //     onIncrease={() => dispatch(increase())} //dispatch, increase 둘다 계속 랜더링이 된다.
  //     onDecrease={() => dispatch(decrease())}
  //   />
  // );

  //useCallback 사용후
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
