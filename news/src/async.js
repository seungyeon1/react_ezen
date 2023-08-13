import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   //GET한다음에 get을 then에 담아서 then하면 setData에 담아라
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  //async 변환
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f2631f791849422c9e22c328f8536f03"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* data &&가 true이면  */}
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
