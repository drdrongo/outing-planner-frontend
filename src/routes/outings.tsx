import {
	Outlet,
	useSearchParams,
} from 'react-router-dom';
import OutingsList from '../components/outings_list';
import { useOutingsContext } from '../contexts/outings_context';

export default function Outings() {
	let [searchParams, setSearchParams] = useSearchParams(); // works like setState, but stores data in the search params instead

	const { outings } = useOutingsContext();

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
				<OutingsList outings={outings}/>
			</nav>
			<Outlet /> {/* Renders the child route's element, if there is one.*/}
		</div>
	);
};
