import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Carrousel from './Carrousel';
import Dropdown from './Dropdown';
import Error404 from './Error404';
import '../style/components/_housingcontent.scss';

const Housingcontent = () => {
	const { id } = useParams();
	console.log('id:', id);
	const logement = logements.find((logement) => logement.id === id);
	console.log('logement', logement);

	if (!logement) {
		return <Error404 />;
	}

	const hostnamearray = logement.host.name.split(' ');

	return (
		<div className='housing-content'>
			<Carrousel />
			<div className='infos-position'>
				<div className='logement-infos'>
					<h1>{logement.title}</h1>
					<p>{logement.location}</p>
					<div className='tags'>
						{logement.tags.map((tag, index) => (
							<button key={index}>{tag}</button>
						))}
					</div>
				</div>
				<div className='host-and-rate'>
					<div className='host-infos'>
						<div className='host-name'>
							<p>{hostnamearray[0]}</p>
							<p>{hostnamearray[1]}</p>
						</div>
						<img src={logement.host.picture} alt='' />{' '}
					</div>
					<div className='rate'>
						{Array.from({ length: 5 }, (_, index) => (
							<img key={index} src={index < logement.rating ? './img/star-active.png' : './img/star-inactive.png'} alt='' />
						))}
					</div>
				</div>
			</div>
			<div className='housing-dropdown'>
				<Dropdown title='Description'>
					<p>{logement.description}</p>
				</Dropdown>
				<Dropdown title='Équipements'>
					<ul>
						{logement.equipments.map((equipement, index) => (
							<li key={index}>{equipement}</li>
						))}
					</ul>
				</Dropdown>
			</div>
		</div>
	);
};

export default Housingcontent;
