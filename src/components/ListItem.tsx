import { useContext } from "react";
import { Button } from "./Button";
import { TaskContext } from "./TaskContext";

type ListItemProps = {
  className: string;
  taskName: string;
  description?: string;
  details?: JSX.Element;
  remove?: JSX.Element;
};

export function ListItem({
  className = "",
  taskName = "",
  details,
  remove,
}: ListItemProps) {
  const tasksList = useContext(TaskContext);

  console.log(tasksList);

  return (
    <li className={className}>
      <span className="text-white">{taskName}</span>
      <span className="flex items-center text-white gap-2">
        <Button children={details} />
        <Button children={remove} />
      </span>
    </li>
  );
}
