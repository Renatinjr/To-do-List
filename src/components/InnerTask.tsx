import { Button } from "./Button";
import { Input } from "./Input";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function InnerTask() {
  return (
    <div className="flex items-center mt-5 gap-1">
      <Input />
      <div className="bg-green-600 flex  items-center justify-center w-8 h-6 rounded-md">
        <Button
          children={<AiOutlinePlusCircle />}
          className="text-white w-4 h-full cursor-pointer"
        />
      </div>
    </div>
  );
}
