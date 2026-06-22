import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TaskList from "./Tasklist";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState(
    "Add a task to get started!"
  );
  const [bgColor, setBgColor] = useState("white");

  function addTask() {

    if (task === "") {
      return;
    }

    setTasks([...tasks, task]);

    setMessage(`Task added: ${task}!`);

    setTask("");

    setBgColor("lightblue");
  }

  return (
    <div className="container mt-5">

      <div className="card p-4 mb-4">

        <h1 style={{ backgroundColor: bgColor }}>
          Task Planner
        </h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>

        <TaskList
          tasks={tasks}
          message={message}
        />

      </div>

    </div>
  );
}

export default App;