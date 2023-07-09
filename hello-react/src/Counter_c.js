import React, { Component } from 'react';
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/constructor
class Counter_c extends Component {
  //   constructor(props) {
  //     super(props); //super : 부모로부터 상속 받는다.
  //     // console.log(this);
  //     //state 초깃값 설정
  //     this.state = {
  //       number: 1,
  //       fixedNumber: 0,
  //     };
  //   }
  //위에 축약형
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 }); : 초기값
            // 이전값 담고 싶을때
            // this.setState((prevState) => ({ number: prevState.number + 1 }));
            this.setState({ number: number + 1 }, () => {
              //콜백 함수 내용
              console.log('방금 state가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter_c;
