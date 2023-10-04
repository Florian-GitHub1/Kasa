import { useParams } from 'react-router-dom';
import logements from '../logements.json';

const LogementHousing = () => {
	const { id } = useParams();
	const logement = logements.find((logement) => logement.id === id);
	return logement;
};

export default LogementHousing;
