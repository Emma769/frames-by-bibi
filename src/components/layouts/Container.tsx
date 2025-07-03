import type { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="w-5/6 max-w-[90%] mx-auto">{children}</div>;
}
