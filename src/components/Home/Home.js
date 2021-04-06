import React from 'react';
import Announcements from './Announcements/Announcements';
import './Home.css';
import Slider from './Slider/Slider';
import Upload from './UploadForm/Upload';
import Vision from './Vision/Vision';

function Home() {
	return (
		<div className="home">
			<Slider />
			<Vision />
			<Announcements />
			<Upload />
		</div>
	);
}

export default Home;
