import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";

const Task = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  function handleAddOrUpdateTask() {
    const taskText = inputRef.current.value.trim();
    if (taskText !== "") {
      if (isEditing) {
        dispatch(editTodo({ id: editTaskId, newText: taskText }));
        setIsEditing(false);
        setEditTaskId(null);
      } else {
        dispatch(addTodo(taskText));
      }
      inputRef.current.value = "";
    }
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditTaskId(null);
    inputRef.current.value = "";
  }

  function startEditTask(taskId, taskText) {
    inputRef.current.value = taskText;
    setIsEditing(true);
    setEditTaskId(taskId);
  }

  useImperativeHandle(ref, () => ({
    startEditTask,
  }));

  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex items-center justify-between w-3/4">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="w-full py-[0.375rem] px-[0.75rem] text-[1rem] border rounded-md focus:outline-none focus:border-blue-500 border-slate-500"
        />
        <button
          onClick={handleAddOrUpdateTask}
          className="w-32 p-2 mx-2 bg-blue-900 rounded text-white"
        >
          {isEditing ? "Update" : "Add task"}
        </button>
        {isEditing && (
          <button
            onClick={handleCancelEdit}
            className="w-32 p-2 mx-2 bg-red-600 rounded text-white"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
});

export default Task;
