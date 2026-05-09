import "./App.css";
import React from "react";
import List from "./components/list";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Welcome to My Todo App</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo(inputValue);
                setInputValue("");
              }
            }}
          />
          <button
            onClick={() => {
              addTodo(inputValue);
              setInputValue("");
            }}
          >
            Add Todo
          </button>
        </div>
        <List items={todos} />
      </div>
    </div>
  );
}

export default App;
