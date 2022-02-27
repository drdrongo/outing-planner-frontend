import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/theme_context';

import ThemeButton from './theme_button';

const Header = () => {
	const { theme } = useThemeContext();

	return (
		<header className="App-header">
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
          ...theme,
				}}
			>
				<ThemeButton />
				<Link to="/outings">Outings</Link> |{' '}
				<Link to="/expenses">Expenses</Link>
			</nav>
		</header>
	);
};

export default Header;
