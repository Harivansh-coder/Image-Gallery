import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

type Props = {
  className?: string;
};

const ThemeToggle = ({ className }: Props) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${className}`}>
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
