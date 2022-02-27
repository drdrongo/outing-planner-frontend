import { useState } from 'react';
import { themes, ThemeContext } from '../contexts/theme_context';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState(true);
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme: Function = () => {
		if (theme === themes.light) {
      setIsLight(false);
			setTheme(themes.dark);
		} else {
      setIsLight(true);
			setTheme(themes.light);
		}
	};

	return (
		<ThemeContext.Provider
			value={{ isLight, theme, toggleTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
