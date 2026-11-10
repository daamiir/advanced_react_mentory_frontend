import { useState } from "react";
import { Task1 } from "./Tasks/Task1/Task1";
import { Task2 } from "./Tasks/Task2/Task2";
import { Task3 } from "./Tasks/Task3/Tasks3";
import { Task4 } from "./Tasks/Task4/Task4";

export function App() {
  const [activeTask, setActiveTask] = useState<1 | 2 | 3 | 4>(4);

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTask(1)}>Таск 1</button>
        <button onClick={() => setActiveTask(2)}>Таск 2</button>
        <button onClick={() => setActiveTask(3)}>Таск 3</button>
        <button onClick={() => setActiveTask(4)}>Таск 4</button>
      </nav>
      Active Task: {activeTask}
      <hr />
      <main style={{ marginTop: "20px" }}>
        {activeTask === 1 && <Task1 />}
        {activeTask === 2 && <Task2 />}
        {activeTask === 3 && <Task3 />}
        {activeTask === 4 && <Task4 />}
      </main>
    </div>
  );
}
