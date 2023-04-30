type ButtonProps = {
  children: any;
  className?: string;
  onClick?: any;
};

export function Button({ children, className = "", onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
