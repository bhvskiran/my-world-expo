import React, { createContext, useEffect, useState } from "react";
import { getItemFromStorage, setItemIntoStorage } from "../utils/utilities";

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

  useEffect(() => {
    getThemeFromStorage();
  }, []);

  const getThemeFromStorage = async () => {
    const res: any = await getItemFromStorage("theme");
    (res === "dark" || res === "light") && setTheme(res);
  };

  const updateTheme = async () => {
    if (theme === "light") {
      await setItemIntoStorage("theme", "dark");
      setTheme("dark");
    } else {
      await setItemIntoStorage("theme", "light");
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
