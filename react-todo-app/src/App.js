import React from "react";
import TodoList from "./component/prop drilling/TodoList";
import { useReducer, useState } from "react";
import Tasks from "./component/context/Tasks";
import {
  TasksContext,
  TasksEventHandlers,
} from "./component/context/TasksContext";
const App = () => {
  const initialTodos = [
    { id: 1, content: "todo1", isUpdateClicked: false },
    { id: 2, content: "todo2", isUpdateClicked: false },
  ];
  const [inputValue, setInputValue] = useState("");
  const todosReducer = (todos, action) => {
    switch (action.type) {
      case "addTodo": {
        return [...todos, action.payload];
      }

      case "updateTodo": {
        todos = todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo = action.payload;
          } else {
            todo.isUpdateClicked = false;
          }
          return todo;
        });
        return todos;
      }

      case "deleteTodo": {
        todos = todos.filter((todo) => action.payload !== todo.id);
        return todos;
      }

      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  };
  const handleAddAction = (newTodo) => {
    const action = { type: "addTodo", payload: newTodo };
    dispatch(action);
  };
  const handleDeleteAction = (id) => {
    const action = { type: "deleteTodo", payload: id };
    dispatch(action);
  };
  const handleUpdateAction = (updatedTodo) => {
    const action = { type: "updateTodo", payload: updatedTodo };
    dispatch(action);
  };
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputValue}
          placeholder="Type your todo"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddAction({
              id: todos.length + 1,
              content: inputValue,
              isUpdateClicked: false,
            });
            setInputValue("");
          }}
        >
          Add
        </button>
      </form>
      {/* Using prop drilling and reducer  */}
      <TodoList
        todos={todos}
        onUpdate={handleUpdateAction}
        onDelete={handleDeleteAction}
      />
      {/* Using context and reducer  */}
      {/* <TasksContext.Provider value={todos}>
        <TasksEventHandlers.Provider
          value={{ handleAddAction, handleDeleteAction, handleUpdateAction }}
        >
          <Tasks />
        </TasksEventHandlers.Provider>
      </TasksContext.Provider> */}
    </div>
  );
};

export default App;
