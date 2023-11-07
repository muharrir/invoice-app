import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const storageAvailable = typeof window !== "undefined" && window.localStorage;

  const [theme, setTheme] = useState(
    storageAvailable ? localStorage.theme : "light"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (storageAvailable) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme, storageAvailable]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
