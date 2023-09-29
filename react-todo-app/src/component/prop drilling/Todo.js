import React, { useState } from "react";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const [updateValue, setUpdateValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todo.isUpdateClicked ? updateValue : todo.content}
        onChange={(e) => {
          setUpdateValue(e.target.value);
        }}
        disabled={!todo.isUpdateClicked}
      />
      {todo.isUpdateClicked ? (
        <button
          onClick={() => {
            onUpdate({
              id: todo.id,
              content: updateValue,
              isUpdateClicked: false,
            });
          }}
        >
          Confirm
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setUpdateValue(todo.content);
              onUpdate({
                id: todo.id,
                content: todo.content,
                isUpdateClicked: true,
              });
            }}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
