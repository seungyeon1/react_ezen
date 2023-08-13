import { createContext, useState } from "react";

//createContext를 ColorContext 담는다.
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  //actions 동적으로 업데이트 한다.
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

//children 메개변수 받아서
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    //Provider 공급을 할거다.
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//조회 ColorConsumer 하겠따.
// ColorContext의 Consumer는 ColorConsumer로 사용하겠다.
const { Consumer: ColorConsumer } = ColorContext;

//(default 제외) 외부에서 사용 가능하도록 , ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
