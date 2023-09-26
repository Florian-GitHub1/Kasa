import React from 'react';
import Dropdown from './Dropdown.js';

const Aboutcontent = () => {
	const aboutInfos = ['Fiabilité', 'Respect', 'Services', 'Sécurité'];
	const infosContent = {
		Fiabilité: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
		Respect: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		Services: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		Sécurité: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	};

	return (
		<div className='about-content'>
			<div className='img-banner about-banner'>
				<div className='img-overlay about-banner-overlay'></div>
				<img src='./img/About-banner-img.png' alt='Paysage' />
			</div>

			<div className='about-infos'>
				{aboutInfos.map((info, index) => (
					<Dropdown key={index} title={info}>
						{<p>{infosContent[info]}</p>}
					</Dropdown>
				))}
			</div>
		</div>
	);
};

export default Aboutcontent;
