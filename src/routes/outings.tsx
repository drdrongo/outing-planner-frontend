import {
	NavLink,
	useLocation,
	Outlet,
	useSearchParams,
} from 'react-router-dom';
import { useContext } from 'react';
import { OutingsContext } from '../contexts/outings_context';

function QueryNavLink({ to = '', ...props }) {
	const location = useLocation();
	return <NavLink to={to + location.search} {...props} />;
}

export default function Outings() {
	let [searchParams, setSearchParams] = useSearchParams(); // works like setState, but stores data in the search params instead

	const { outings } = useContext(OutingsContext);

	return (
		<div className="main">
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}
			>
				<input
					value={searchParams.get('filter') || ''}
					onChange={event => {
						const filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>
				{outings
					.filter(outing => {
						const filter = searchParams.get('filter');
						if (!filter) return true;

						const title = outing.title.toLowerCase();
						return title.startsWith(filter.toLowerCase());
					})
					.map(outing => (
						<QueryNavLink // lets us show that this current link is acative or inactive.
							style={({ isActive = false }) => {
								return {
									display: 'block',
									margin: '1rem 0',
									color: isActive ? 'red' : '',
								};
							}}
							to={`/outings/${outing.id}`}
							key={outing.id}
						>
							{outing.title}
						</QueryNavLink>
					))}
			</nav>
			<Outlet />
			{/* Renders the child route's element, if there is one.*/}
		</div>
	);
}
