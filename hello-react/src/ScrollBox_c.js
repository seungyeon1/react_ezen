import React, { Component } from 'react';

class ScrollBox_c extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.boxRef;
    this.boxRef.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '330px',
      width: '330px',
      overflow: 'auto',
      position: 'relative',
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, yellow)',
    };

    return (
      <div>
        <h4>Class Function ScrollBox + 부모 컴포넌트 Ref</h4>
        <div
          style={style}
          ref={(ref) => {
            this.boxRef = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </div>
    );
  }
}

export default ScrollBox_c;
