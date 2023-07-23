import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="todo-list-item">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
