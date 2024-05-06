import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold py-2 px-10 rounded-lg ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
