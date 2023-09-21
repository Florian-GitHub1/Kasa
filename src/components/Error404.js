import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/components/_error404.scss';

const Error404 = () => {
	return (
		<div className='error404'>
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to='/' className='return-home'>
				Retouner sur la page d'accueil
			</NavLink>
		</div>
	);
};

export default Error404;
