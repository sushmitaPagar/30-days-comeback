import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const List = ({ items, updateTodo, editTodo, deleteTodo }) => {
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = (id) => {
    editTodo(id, editText);

    setEditingId(null);
    setEditText("");
  };

  const handleToggle = (id) => {
    updateTodo(id);
  };

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <div key={item.id} className="todo-item">
          <li>
            <input
              type="checkbox"
              className="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            {/* SHOW INPUT WHEN EDITING */}
            {editingId === item.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            )}
            <div className="action-btns">
              {editingId === item.id ? (
                <IconButton color="primary" fontSize="small" onClick={() => saveEdit(item.id)}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton color="primary" fontSize="small" onClick={() => startEditing(item)}>
                  <EditIcon />
                </IconButton>
              )}
              <IconButton color="primary" fontSize="small" onClick={() => deleteTodo(item.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default List;
