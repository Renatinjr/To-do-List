import { createContext } from "react";
import { Task } from "./Task";

type ContextTask = {
  task: Task[];
  setTask: any;
};
export const TaskContext = createContext<ContextTask>({
  task: [],
  setTask: "",
});
