// https://react-redux.js.org/api/hooks#recipe-useactions

// 액션 생성함수를 액션을 디스패치하는 함수로 변환
// 액션 생성함수를 사용하여 액션 객체를 만들고 이를 스토어에 디스패치하는
// 작업을 해주는 함수를 자동으로 만들어 준다.

import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

//첫번째 파라미터는 액션 생성함수를 이루어진 배열
//두번째 파라미터는 deps배열, 이배열안에 들어있는 원소가 바뀌면 액션을
//디스패치하는 함수를 새로 만들게 된다.

// deps : 의존성 배열
// 리액트가 언제 컴포넌트를 다시 렌더링해야 하는지 결정하는데 사용, 배열 내의 값들이
// 이전 렌더링과 비교되어 변경이 있으면 해당 훅 내의 내용이 실행되거나 값이 업데이트된다.
// 변경이 없으면 리렌더링이 발생하지 않는다.

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  //useMemo 최적화
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
