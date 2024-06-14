import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../features/todo/todoSlice";

const TaskList = ({ startEditTask }) => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleDone = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-3/5 mx-auto">
        <h3 className="text-slate-700 font-medium text-xl text-center">
          Your tasks:
        </h3>
        <ul className="flex flex-col items-start w-full m-2 list-disc">
          {tasks.map((task, i) => (
            <li
              className={`list-decimal m-1 text-slate-800 font-medium flex items-center justify-between w-full ${
                task.done ? "line-through text-gray-500" : ""
              }`}
              key={task.id}
            >
              <div className="flex items-start justify-center">
                <span className="mr-2 text-black">{i + 1}.</span>{" "}
                <span className="flex items-center text-left">{task.text}</span>
              </div>
              <div className="flex">
                <button
                  className="px-3 p-1 mx-1 bg-blue-600 rounded text-white"
                  onClick={() => startEditTask(task.id, task.text)}
                >
                  Edit
                </button>
                <button
                  className="px-3 p-1 mx-1 bg-red-600 rounded text-white"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button
                  className={`px-3 p-1 mx-1 ${
                    task.done ? "bg-green-600" : "bg-yellow-600"
                  } rounded text-white`}
                  onClick={() => handleToggleDone(task.id)}
                >
                  {task.done ? "Undo" : "Done"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
