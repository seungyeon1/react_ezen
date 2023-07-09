import React from 'react';
import PropTypes from 'prop-types';

//rsc 단축키

//props destructuring 비구조화 방법1 : const에 변수로 사용한다.
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       {name} 첫 컴포넌트
//       <br />
//       children 값은 {children}
//     </div>
//   )

//props destructuring 비구조화 방법2 : 처음부터 매게변수에 지정한다.
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      {name} 첫 컴포넌트
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

//MyComponent 외부에서 사용할때 MyComponent 네이밍선언(MyComponent.)
//제약두기
MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, //isRequired : (무조건)필수로 넣어야한다.
};
MyComponent.defaultProps = {
  name: 'react',
  children: 'children',
};

export default MyComponent;
