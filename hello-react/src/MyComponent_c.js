// Class컴포넌트 rcc 단축
// Class파일명 앞 대문자!
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent_c extends Component {
  //static : 내부 설정
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  static defaultProps = {
    name: 'react',
    children: 'children',
  };

  render() {
    const { name, children, favoriteNumber } = this.props; //this !
    // console.log(this); //MyComponent_c
    return (
      <div>
        {name} 첫 컴포넌트
        <br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}
//MyComponent_c 외부에서 사용할때 네이밍선언(MyComponent_c.)
// MyComponent_c.propTypes = {
//     name: PropTypes.string,
//     children: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired, //isRequired : (무조건)필수로 넣어야한다.
//   };
//   MyComponent_c.defaultProps = {
//     name: 'react',
//     children: 'children',
//   };
export default MyComponent_c;
