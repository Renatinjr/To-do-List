import { Button } from "./Button";
import { Input } from "./Input";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TaskContext } from "./TaskContext";
import { useContext, useRef } from "react";
import { Task } from "./Task";

export function InnerTask() {
  const taskContext = useContext(TaskContext);
  const { task, setTask } = taskContext;
  const taskTitleRef = useRef<HTMLInputElement>(null);

  function handleAddTask(taskTitle: string = ""): void {
    console.log("Dentro da funçao");
    const newTask: Task[] = [
      ...task,
      { nameTask: taskTitle, description: "desc", completed: true },
    ];
    setTask(newTask);
  }

  return (
    <div className="flex items-center mt-5 gap-1">
      <Input fowardRef={taskTitleRef} />
      <div className="bg-green-600 flex  items-center justify-center w-8 h-6 rounded-md">
        <Button
          children={<AiOutlinePlusCircle />}
          className="text-white w-4 h-full cursor-pointer"
          onClick={() => handleAddTask(taskTitleRef.current?.value)}
        />
      </div>
    </div>
  );
}
