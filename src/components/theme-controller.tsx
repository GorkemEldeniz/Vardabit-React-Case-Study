import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Icon from "./icon";

type Theme = "light" | "dark" | "system";

const ThemeController = () => {
  const storedTheme = localStorage.getItem("theme") as Theme;
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    storedTheme || "system"
  );

  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      selectedTheme === "system" ? (isDark ? "dark" : "light") : selectedTheme
    );
  }, [isDark]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value as Theme;
    setSelectedTheme(selectedTheme);
    document.documentElement.setAttribute(
      "data-theme",
      selectedTheme === "system" ? (isDark ? "dark" : "light") : selectedTheme
    );
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedTheme === "system" && (
          <Icon className="size-5" name="computer" />
        )}
        {selectedTheme === "light" && <Icon className="size-5" name="sun" />}
        {selectedTheme === "dark" && <Icon className="size-5" name="moon" />}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
      >
        <li>
          <label
            htmlFor="system"
            className="theme-controller btn btn-md btn-block btn-ghost"
          >
            <Icon className="size-5" name="computer" />
          </label>
          <input
            type="radio"
            name="theme-dropdown"
            className="sr-only"
            value="system"
            id="system"
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <label
            htmlFor="light"
            className="theme-controller btn btn-md btn-block btn-ghost"
          >
            <Icon className="size-5" name="sun" />
          </label>
          <input
            type="radio"
            name="theme-dropdown"
            className="sr-only"
            value="light"
            id="light"
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <label
            htmlFor="dark"
            className="theme-controller btn btn-md btn-block btn-ghost"
          >
            <Icon className="size-5" name="moon" />
          </label>
          <input
            type="radio"
            name="theme-dropdown"
            className="sr-only"
            value="dark"
            id="dark"
            onChange={handleThemeChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeController;
