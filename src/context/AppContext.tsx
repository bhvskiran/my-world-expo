import React, { createContext, useState } from "react";

export const ApplicationContext = createContext({
  theme: "light",
  updateTheme: () => {},
} as {
  theme: string;
  updateTheme: () => void;
});

type Theme = "dark" | "light";

const AppContext: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ApplicationContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;
