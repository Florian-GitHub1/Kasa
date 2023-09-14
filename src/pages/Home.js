import React from 'react';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Homecontent from '../components/Homecontent.js';

const Home = () => {
	return (
		<div className='page-position'>
			<Navigation />
			<Homecontent />
			<Footer />
		</div>
	);
};

export default Home;
