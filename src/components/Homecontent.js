import { NavLink } from 'react-router-dom';
import Logementsdata from './Logementsdata';
import '../style/components/_homecontent.scss';

const Homecontent = () => {
	const logementsData = Logementsdata();

	return (
		<div className='home-content'>
			<div className='img-banner home-banner'>
				<div className='img-overlay home-banner-overlay'></div>
				<img src='./img/Home-banner-img.png' alt='Paysage' />
				<p>
					Chez vous, <span>{''}partout et ailleurs</span>
				</p>
			</div>
			<div className='home-gallery'>
				{logementsData.map((logement, index) => (
					<NavLink to={`${logement.id}`} className='card' key={index}>
						<img src={logement.cover} alt="Pièce d'un logement" />
						<h3>{logement.title}</h3>
						<div className='card-overlay'></div>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Homecontent;
