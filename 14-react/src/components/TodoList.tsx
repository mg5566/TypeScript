import React from "react";

import "./TodoList.css";

interface Props {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={onDeleteTodo.bind(null, item.id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
