import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "ghost" | "danger";
  onClick?: () => void;
}

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  ghost: "border border-gray-300 text-gray-600 hover:bg-gray-100",
  danger: "border border-red-300 text-red-600 hover:bg-red-50",
};

const Button = (props: ButtonProps) => {
  const { children, type = "button", variant = "primary", onClick } = props;
  return (
    <button
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${variants[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
