
import { themeIcons } from '../../../../shared/assets';
import { useTheme } from '../../../../app/providers/ThemeProvider.tsx';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.dark : themeIcons.light}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    ></img>
  );
};

export default ThemeButton;