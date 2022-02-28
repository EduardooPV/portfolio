import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  // ReactNode,
} from "react";

// interface PropsChildren {
//   children: ReactNode;
// }
// interface Props {
//   width: number;
//   setWidth: number;
// }

const WidthContext = createContext();

// eslint-disable-next-line react/prop-types
export function WidthProvider({children}) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <WidthContext.Provider value={width}>{children}</WidthContext.Provider>
  );
}

export function useWidth() {
  const context = useContext(WidthContext);

  return context;
}
