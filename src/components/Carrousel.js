import React, { useState } from 'react';
import '../style/components/_housingcontent.scss';
import LogementHousing from './LogementHousing';

const Carrousel = () => {
	const logement = LogementHousing();
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1));
	};

	const previousSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1));
	};

	return (
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
	);
};

export default Carrousel;
