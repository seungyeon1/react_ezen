import React, { Component } from 'react';

class EventPractice_c extends Component {
  state = {
    username: '',
    message: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    //1. alert 창 실행 한다
    alert(this.state.username + ':' + this.state.message);
    //2. 초기화 한다
    this.setState({
      username: '',
      message: '',
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>클래스함수 이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="placeholder"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice_c;
