import './styles/index.scss'
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import $http from './data/http';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


import OutingsProvider from './contexts/OutingsContext';
import Header from './components/header';

function App() {

	return (
			<OutingsProvider>
				<div className="App">
					<Header />
					<Outlet />
				</div>
			</OutingsProvider>
	);
}

export default App;
