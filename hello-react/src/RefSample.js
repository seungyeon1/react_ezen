import React, { Component } from 'react';

class RefSample extends Component {
  inputRef = React.createRef(); //DOM에 바로 접근

  handleFocus = () => {
    this.inputRef.current.focus(); //current 꼭 사용하기
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
      </div>
    );
  }
}

export default RefSample;
