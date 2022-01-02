import React, { useState, useEffect } from 'react';
import './styles/index.scss'
import { Outlet, Link } from 'react-router-dom';

// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import { ThemeContext } from './contexts/ThemeContext';
import { Outing, fetchOutings } from './data/outings';
import { OutingsContext } from './contexts/OutingsContext';


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

	const [outings, setOutings] = useState<Array<Outing>>([]);

	function getOuting(id: number): Outing | undefined {
		return outings.find(outings => outings.id === id);
	}

	useEffect(() => {
		fetchOutings().then((response: Outing[]) => setOutings(response));
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<OutingsContext.Provider value={{ outings, getOuting }}>
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
			</OutingsContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
