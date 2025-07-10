import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-all" />
      ) : (
        <Sun className="w-4 h-4 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}