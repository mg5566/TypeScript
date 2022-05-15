import React from "react";

interface Props {
  items: { id: string; text: string }[];
}

const TodoList: React.VFC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
