import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id: "t1", text: "finish the course" },
    { id: "t2", text: "watch the tottenham match" },
  ];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
