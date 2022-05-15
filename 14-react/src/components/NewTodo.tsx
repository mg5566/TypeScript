import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodoInput = todoInputRef.current!.value;
    console.log("todo Submit Handler", enteredTodoInput);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-descript">TODO Descript</label>
        <input type="text" id="todo-descript" ref={todoInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
