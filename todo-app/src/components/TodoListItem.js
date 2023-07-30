import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; //조건부 스타일링 lib 메서드 이름
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo; //비구조화할당문

  return (
    <div className="todo-list-item">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

// export default TodoListItem;

// React.meno 사용법
// TodoListItem 컴포넌트는 { todo, onRemove, onToggle } 이 바뀌지 않으면 리렌더링을 하지않는다.
// 그러나 여기서는 onRemove onToggle 는 상태값이 변하므로 !
// 이를 방지하는 방법도 추가를 해야한다.
export default React.memo(TodoListItem);
