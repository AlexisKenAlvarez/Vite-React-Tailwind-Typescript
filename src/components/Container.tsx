import { ReactNode } from "react";
import { cn } from "../utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section className={cn("w-full h-auto relative px-5", className)}>
      {children}
    </section>
  );
};

export default Container;
