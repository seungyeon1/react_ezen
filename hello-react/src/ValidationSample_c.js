import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample_c extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };
  inputRef = React.createRef(); //createRef : 리액트16.3 이후부터 도입

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.inputRef.current.focus(); //커서 포커스 접근 createRef 사용시 .current 필수 사용
  };
  hanldeKey = (e) => {
    if (e.key === 'Enter') {
      this.handleButtonClick();
    }
  };
  render() {
    return (
      <div>
        <h4>Class Function Validation</h4>
        <input
          ref={this.inputRef}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyUp={this.hanldeKey}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        ></input>
        {/* ref 콜백함수 사용하는법 */}
        {/* <input
          ref={(refa) => (this.inputRef = refa)}
        ></input> */}
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample_c;
