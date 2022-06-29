import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

export const contextHeading = createContext(2);

function Heading({
  level,
  ...props
}: ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
  level: number;
}) {
  const l = Math.max(1, Math.min(level, 6));
  switch (l) {
    case 1:
      return <h1 className="h" {...props} />;
    case 2:
      return <h2 className="h" {...props} />;
    case 3:
      return <h3 className="h" {...props} />;
    case 4:
      return <h4 className="h" {...props} />;
    case 5:
      return <h5 className="h" {...props} />;
    case 6:
      return <h6 className="h" {...props} />;
  }
}

export function HLevel({ children }: PropsWithChildren<unknown>) {
  const level = useContext(contextHeading);
  return (
    <contextHeading.Provider value={level + 1}>
      {children}
    </contextHeading.Provider>
  );
}

export function H({
  plus = 0,
  ...props
}: Omit<ComponentProps<typeof Heading>, "level"> & {
  plus?: number;
}) {
  const l = useContext(contextHeading) + plus;
  return <Heading level={l} {...props} />;
}
