import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import Errorpage from './components/Error404';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<Errorpage />} />
				<Route path='/:id' element={<Housing />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
