import React from "react";
import { useContext } from "react";
import { TasksContext } from "./TasksContext.js";
import Task from "./Task";
const Tasks = () => {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
