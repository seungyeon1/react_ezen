import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";

function App() {
  const onClick = () => {
    // notify();
    //코드 splitting 하기 위해서 사용한다.
    import("./notify").then((result) => result.default()); //클릭후 파일 불러온다. f12에 network 에서 확인
    //splitting: 파일 쪼개서 가져온다는 뜻
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Split project React! </p>
      </header>
      x
    </div>
  );
}

export default App;
