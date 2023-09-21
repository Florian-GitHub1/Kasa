import React from 'react';
import Navigation from '../components/Navigation';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';

const Errorpage = () => {
	return (
		<div className='page-position'>
			<Navigation />
			<Error404 />
			<Footer />
		</div>
	);
};

export default Errorpage;
