import React, { useState } from 'react';
import './styles/index.scss'
import { Outlet, Link } from 'react-router-dom';
// import $http from './data/http';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


import { ThemeContext } from './contexts/ThemeContext';
import OutingsProvider from './contexts/OutingsContext';

const themes = {
	dark: {
		foreground: '#FFFFFF',
		background: '#000000',
	},
	light: {
		foreground: '#000000',
		background: '#FFFFFF',
	},
};

function App() {
	const [theme, setTheme] = useState(themes.light);
	const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
		setTheme(theme === themes.dark ? themes.light : themes.dark);
	};


	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<OutingsProvider>
				<div className="App">
					<header className="App-header">
						<nav
							style={{
								borderBottom: 'solid 1px',
								paddingBottom: '1rem',
							}}
						>
							<Link to="/outings">Outings</Link> |{' '}
							<Link to="/expenses">Expenses</Link>
						</nav>

						{/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
						{/* <AccessAlarmIcon/>
          <ThreeDRotation/> */}
					</header>
					<Outlet />
				</div>
			</OutingsProvider>
		</ThemeContext.Provider>
	);
}

export default App;
