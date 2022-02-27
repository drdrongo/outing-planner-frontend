import { Outlet } from 'react-router-dom';

import OutingsProvider from './contexts/outings_context';
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
