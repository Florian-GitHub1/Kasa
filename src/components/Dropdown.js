import React, { useState } from 'react';
import '../style/components/_dropdown.scss';

const Dropdown = ({ title, children }) => {
	const [openDropdown, setOpenDropdown] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setOpenDropdown(!openDropdown);
		setIsOpen(!isOpen);
	};

	return (
		<div className={`dropdown ${openDropdown ? 'open' : 'close'}`}>
			<div className='dropdown_bar'>
				<h1>{title}</h1>
				<img src='./img/arrow_icon.png' alt='flèche' onClick={toggleDropdown} />
			</div>
			<div className='dropdown_content'>{children}</div>
		</div>
	);
};

export default Dropdown;
