import { createContext, useState } from "react";

const colorContext = createContext({
  color: "",
  setColor: () => null,
});

const ColorProvider = (props) => {
  const { children } = props;
  const [color, setColor] = useState("");

  const value = { color, setColor };

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
};

export { colorContext, ColorProvider };