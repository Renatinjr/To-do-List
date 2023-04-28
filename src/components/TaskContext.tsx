import { createContext } from "react";
import { Task } from "./Task";

export const TaskContext = createContext<Task[]>([
  {
    nameTask: "",
    description: "",
    completed: false,
  },
]);
