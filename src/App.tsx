import { useState } from "react";
import { Header } from "./components/Header";
import { InnerTask } from "./components/InnerTask";
import { List } from "./components/List";
import { TaskContext } from "./components/TaskContext";
import { Task } from "./components/Task";

export function App() {
  const [task] = useState<Task[]>([
    { nameTask: "Cagar", description: "Testando", completed: true },
    { nameTask: "Chorar", description: "Testando", completed: false },
    { nameTask: "Dormir", description: "Testando", completed: true },
  ]);

  return (
    <section className="bg-slate-900 w-screen h-screen flex justify-center pt-3">
      <div className="bg-slate-800 w-96 h-44 p-4 rounded-md">
        <Header />
        <TaskContext.Provider value={task}>
          <InnerTask />
          <List />
        </TaskContext.Provider>
      </div>
    </section>
  );
}
