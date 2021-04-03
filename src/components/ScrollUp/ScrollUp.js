import React from 'react';
import './ScrollUp.css';

function ScrollUp() {
	// Set the top cordinate to 0
	// make scrolling smooth
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="scrollUp">
			<div onClick={scrollToTop} align="center">
				Scroll To Top
			</div>
		</div>
	);
}

export default ScrollUp;
