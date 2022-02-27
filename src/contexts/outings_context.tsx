import { createContext, useEffect, useState } from 'react';
import { Outing, fetchOutings } from '../data/outings';

type GlobalOutings = {
	outings: Outing[];
	getOuting: Function;
	updateOuting: Function;
};

type Props = {
	children: JSX.Element;
};

export const OutingsContext = createContext<GlobalOutings>({
	outings: [],
	getOuting: () => {},
	updateOuting: () => {},
});

const OutingsProvider = ({ children }: Props) => {
	const [outings, setOutings] = useState<Array<Outing>>([]);

	function getOuting(id: number): Outing | undefined {
		return outings.find(outings => outings.id === id);
	}

	function updateOuting(id: number, params: object): boolean {
		const thisOuting = outings.find(outings => outings.id === id);
		if (!thisOuting) {
			console.error('No outing found (updateOuting)');
			return false;
		}

		Object.keys(params).forEach(
			key =>
				(thisOuting[key as keyof object] = params[key as keyof object])
		);
		setOutings([...outings]);
		return true;
	}

	useEffect(() => {
		fetchOutings().then((response: Outing[]) => setOutings(response));
	}, []);

	return (
		<OutingsContext.Provider value={{ outings, getOuting, updateOuting }}>
			{children}
		</OutingsContext.Provider>
	);
};

export default OutingsProvider;