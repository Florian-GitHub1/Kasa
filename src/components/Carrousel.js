import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Logementsdata from './Logementsdata';
import '../style/components/_housingcontent.scss';

const Carrousel = () => {
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
	</div>;
};

export default Carrousel;
