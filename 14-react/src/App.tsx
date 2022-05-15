import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id: "t1", text: "finish the course" },
    { id: "t2", text: "watch the tottenham match" },
  ];

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
