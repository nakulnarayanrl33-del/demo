import React from "react";

function TaskList(props) {
  return (
    <div>

      <ul>

        {props.tasks.map((task, index) => (

          <li key={index}>
            {task}
          </li>

        ))}

      </ul>

      <p>{props.message}</p>

    </div>
  );
}

export default TaskList;