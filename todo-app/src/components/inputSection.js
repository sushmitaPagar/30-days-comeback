import React from "react";

function InputSection({ inputValue, setInputValue, addTodo }) {
  return (
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
  );
}

export default InputSection;