import { ReactNode } from "react";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`w-fit px-8 py-3 bg-primary hover:bg-primary/60 transition-all ease-in-out duration-300 border-2 border-black rounded-full font-primary text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
