import { Button } from "./Button";

type ListItemProps = {
  className: string;
  taskName: string;
  description?: string;
  iconDetails?: JSX.Element;
  iconRemove?: JSX.Element;
  eventDetails?: any;
  eventRemove?: any;
  fowardRef?: any;
};

export function ListItem({
  className = "",
  taskName = "",
  iconDetails,
  iconRemove,
  eventDetails,
  eventRemove,
  fowardRef,
}: ListItemProps) {
  return (
    <li className={className} ref={fowardRef}>
      <span className="text-white">{taskName}</span>
      <span className="flex items-center text-white gap-2">
        <Button children={iconDetails} onClick={eventDetails} />
        <Button children={iconRemove} onClick={eventRemove} />
      </span>
    </li>
  );
}
