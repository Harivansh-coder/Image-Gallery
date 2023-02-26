import React, { useState, useEffect } from "react";
import { createContext } from "react";

type ITheme = "light" | "dark";

type IThemeContext = {
  theme: ITheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme as "light" | "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={theme}>{props.children}</main>
    </ThemeContext.Provider>
  );
}
