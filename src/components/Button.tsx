type ButtonProps = {
  children: any;
  className?: string;
};

export function Button({ children, className = "" }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
