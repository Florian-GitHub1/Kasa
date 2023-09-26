import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Aboutcontent from '../components/Aboutcontent';
import '../style/components/_aboutcontent.scss';

const About = () => {
	return (
		<div className='page-position'>
			<Navigation />
			<Aboutcontent />
			<Footer />
		</div>
	);
};

export default About;
