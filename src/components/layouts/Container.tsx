import type { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="w-4/5 mx-auto">{children}</div>;
}
