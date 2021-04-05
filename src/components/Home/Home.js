import React from 'react';
import Announcements from './Announcements/Announcements';
import './Home.css';
import Slider from './Slider/Slider';
import Vision from './Vision/Vision';

function Home() {
	return (
		<div className="home">
			<Slider />
			<Vision />
			<Announcements />
		</div>
	);
}

export default Home;
