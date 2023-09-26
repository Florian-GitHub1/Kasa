import { useState, useEffect } from 'react';
import logements from '../logements.json';

const Logementsdata = () => {
	const [logementsData, setLogementsData] = useState([]);

	useEffect(() => {
		setLogementsData(logements);
	}, []);

	return logementsData;
};

export default Logementsdata;
