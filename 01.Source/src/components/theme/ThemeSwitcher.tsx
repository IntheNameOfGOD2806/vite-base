import { useTheme } from '#/context/theme';
import { Button } from '#/components/ui-react-aria';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme} className={className}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
};
