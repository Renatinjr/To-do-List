import { ListItem } from "./ListItem";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdRemoveCircle } from "react-icons/io";
export function List() {
  return (
    <ul className="mt-4">
      <ListItem
        className="bg-gray-900 rounded-md p-2 flex items-center justify-between"
        taskName="teste"
        details={<AiFillInfoCircle />}
        remove={<IoMdRemoveCircle />}
      />
    </ul>
  );
}
