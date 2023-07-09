import React from 'react';
import MyComponent from './MyComponent';
import MyComponent_c from './MyComponent_c';
import Counter_c from './Counter_c';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name={'Function'} favoriteNumber={3}>
        textNode
      </MyComponent>
      <hr></hr>
      <MyComponent_c name={'Class'} favoriteNumber={1}>
        textNode
      </MyComponent_c>
      <hr></hr>
      <Counter_c></Counter_c>
      <hr></hr>
      <Say></Say>
    </div>
  );
};

export default App;
