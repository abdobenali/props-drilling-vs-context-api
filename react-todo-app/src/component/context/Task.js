import React from "react";
import { useContext, useState } from "react";

import { TasksEventHandlers } from "./TasksContext.js";
const Task = ({ task }) => {
  const eventHandlers = useContext(TasksEventHandlers);
  const [updateValue, setUpdateValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={task.isUpdateClicked ? updateValue : task.content}
        onChange={(e) => {
          setUpdateValue(e.target.value);
        }}
        disabled={!task.isUpdateClicked}
      />
      {task.isUpdateClicked ? (
        <button
          onClick={() => {
            eventHandlers.handleUpdateAction({
              id: task.id,
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
              eventHandlers.handleDeleteAction(task.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setUpdateValue(task.content);
              eventHandlers.handleUpdateAction({
                id: task.id,
                content: task.content,
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

export default Task;
