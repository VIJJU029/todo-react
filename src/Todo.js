import { useState } from "react";

export function Todo() {
  const [allTasks, setTasks] = useState(["Playing", "Coding"]);

  const [currentTask, setCurrentTask] = useState("");

  function collectData(info) {
    setCurrentTask(info.target.value);
  }

  function sendData() {
    setTasks([...allTasks, currentTask]);
  }

  return (
    <div>
      Enter text:
      <input type="text" onChange={collectData} />
      <button onClick={sendData}>Addtask</button>
      {allTasks.map(function (i) {
        return <li>{i}</li>;
      })}
    </div>
  );
}
