import React from "react";
import List from "./list";
import InputSection from "./inputSection";

function TodoCard() {
  const [todos, setTodos] = React.useState(() => {
    // Load from localStorage on first render
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = React.useState("");

  // Save to localStorage whenever todos changes
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Welcome to My Todo App</h1>
      <InputSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />
      <List
        items={todos}
        updateTodo={updateTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoCard;
