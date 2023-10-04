import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Logementsdata from './Logementsdata';
import Dropdown from './Dropdown';
import Error404 from './Error404';
import '../style/components/_housingcontent.scss';

const Housingcontent = () => {
	const { id } = useParams();
	const logementsData = Logementsdata();
	const logement = logementsData.find((logement) => logement.id === id);
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1));
	};

	const previousSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1));
	};

	if (!logement) {
		return <Error404 />;
	}

	const hostnamearray = logement.host.name.split(' ');

	return (
		<div className='housing-content'>
			<div className='carrousel-position'>
				<div className='carrousel'>
					<img className='current-img' src={logement.pictures[currentSlide]} alt='' />
					{logement.pictures.length > 1 && (
						<>
							<img className='arrow left-arrow' src='./img/left-arrow.png' alt='flèche vers la gauche' onClick={previousSlide} />
							<img className='arrow right-arrow' src='./img/right-arrow.png' alt='flèche vers la droite' onClick={nextSlide} />{' '}
							<span className='carrousel_slide-number'>
								{currentSlide + 1}/{logement.pictures.length}{' '}
							</span>
						</>
					)}
				</div>
			</div>
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
