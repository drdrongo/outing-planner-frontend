import './styles/index.scss';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Expenses from './routes/expenses';
import Outings from './routes/outings';
import OutingsShow from './routes/outing';
import ThemeProvider from './providers/theme_provider';
import OutingsProvider from './providers/outings_provider';
import Swiper from './routes/swiper';

ReactDOM.render(
	<OutingsProvider>
	<ThemeProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="outings" element={<Outings />}>
						<Route
							index
							element={
								<main style={{ padding: '1rem' }}>
									<p>Select an outing</p>
								</main>
							}
						/>
						<Route path=":outingId" element={<OutingsShow />} />
					</Route>
					<Route path="swiper" element={<Swiper />} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
	</OutingsProvider>
	,
	document.getElementById('root')
);
