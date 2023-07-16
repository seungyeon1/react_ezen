import React from 'react';
import MyComponent from './MyComponent';
import MyComponent_c from './MyComponent_c';
import Counter_c from './Counter_c';
import Say from './Say';
// import EventPractice_c from './EventPractice_c';
import EventPractice from './EventPractice';
import ValidationSample_c from './ValidationSample_c';
import IterationSample from './IterationSample';

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
      <hr></hr>
      {/* <EventPractice_c></EventPractice_c> */}
      <EventPractice></EventPractice>
      <hr></hr>
      {/* <EventPractice_c></EventPractice_c> */}
      <hr></hr>
      <ValidationSample_c></ValidationSample_c>
      <hr></hr>

      <IterationSample></IterationSample>
    </div>
  );
};

export default App;
