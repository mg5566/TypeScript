import React, { useRef } from "react";

import "./NewTodo.css";

interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodoInput = todoInputRef.current!.value;
    console.log("todo Submit Handler", enteredTodoInput);
    onAddTodo(enteredTodoInput);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-descript">TODO Descript</label>
        <input type="text" id="todo-descript" ref={todoInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
