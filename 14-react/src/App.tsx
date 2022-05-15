import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "finish the course" },
    { id: "t2", text: "watch the tottenham match" },
  ]);

  const addTodoHandler = (text: string) => {
    console.log("todo add handler", text);
    const newTodo = { id: Math.random().toString(), text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
