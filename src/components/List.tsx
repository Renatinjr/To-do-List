import { useContext, useEffect, useRef, useState } from "react";
import { ListItem } from "./ListItem";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdRemoveCircle } from "react-icons/io";
import { TaskContext } from "./TaskContext";
export function List() {
  const taskListContext = useContext(TaskContext);

  const { task, setTask } = taskListContext;

  function handleTaskRemove(taskId: number): void {
    const newTaskArr = task.filter((e) => (e.id !== taskId ? e : null));
    setTask(newTaskArr);
  }

  return (
    <ul className="mt-4 flex flex-col gap-2">
      {task.map((e) => {
        return (
          <ListItem
            key={Math.random()}
            className="bg-gray-900 rounded-md p-2 flex items-center justify-between"
            taskName={e.nameTask}
            iconDetails={<AiFillInfoCircle />}
            iconRemove={<IoMdRemoveCircle />}
            eventRemove={() => handleTaskRemove(e.id)}
          />
        );
      })}
    </ul>
  );
}
