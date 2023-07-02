function App() {
  const type = undefined //전역변수 
  return (
    // <>
    //    {/* {number === '0' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다</h2>} */}
    //    {/* {number && <h1>리액트입니다.</h1>} */}
    //    {type || '값이 undefined입니다 '}
    // </>
    <div>{type || 'react'}</div>
  );
  // return <>{name === 'react' && <h1>리액트입니다.</h1>}</> 반환값이 하나라면 이렇게 축약형으로 쓴다.
}
