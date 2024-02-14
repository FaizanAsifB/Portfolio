import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const [theme, setTheme] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    // <div className="relative flex items-center gap-1">
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() =>
        setTheme(theme === "dark" ? "theme-light" : "dark")
      }
    >
      <div className="relative rounded-full h-4 w-4">
        <Sun
          fill="hsl(var(--secondary))"
          className="absolute inset-0 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-secondary"
        />
        <Moon
          fill="hsl(var(--secondary))"
          className="absolute inset-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:-translate-x-5 dark:scale-100 text-secondary"
        />
      </div>
    </Switch>
    // </div>
  );
}

export default ThemeSwitch;
