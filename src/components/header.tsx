import { useThemeContext } from '../contexts/theme_context';
import StyledLink from './styled_link';
import ThemeButton from './theme_button';

const Header = () => {
	const { isLight, theme } = useThemeContext();

	return (
		<header className="app-header" style={{ ...theme, borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: theme.color }}>
			<nav>
				<ThemeButton />
				<StyledLink to="/outings">Outings</StyledLink> |{' '}
				<StyledLink to="/expenses">Expenses</StyledLink>
			</nav>
		</header>
	);
};

export default Header;
