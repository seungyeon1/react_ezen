import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    //ColorProvider : 공급자 <ColorContext.Provider value={value}>{children}</ColorContext.Provider> children: ColorBox
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
