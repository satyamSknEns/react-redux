import "./App.css";
import Task from "./components/task";
import TaskList from "./components/taskList";
import React, { useRef } from "react";

function App() {
  const taskRef = useRef();

  function startEditTask(taskId, taskText) {
    taskRef.current.startEditTask(taskId, taskText);
  }

  return (
    <div className="App">
      <Task ref={taskRef} />
      <TaskList startEditTask={startEditTask} />
    </div>
  );
}

export default App;
