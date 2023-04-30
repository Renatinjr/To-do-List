import { ReactFragment, Ref, useRef } from "react";

type InputProps = {
  value?: HTMLInputElement | null;
  fowardRef?: any;
};
export function Input({ fowardRef }: InputProps) {
  return (
    <input
      type="text"
      className="w-full border-collapse rounded-sm flex-1"
      placeholder="Enter a task"
      ref={fowardRef}
      // value={value}
    />
  );
}
