import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
