import type { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="shadow-sm rounded-sm overflow-hidden h-fit w-fit">
      {children}
    </div>
  );
}
