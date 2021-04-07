import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Slider.css';
import useFirestore from '../../../hooks/useFirestore';

function Slider() {
	const { docs } = useFirestore('sliders');
	console.log(docs);

	return (
		<Container className="my-5">
			<Carousel fade>
				{docs &&
					docs.map(doc => (
						<Carousel.Item key={doc.id} interval={2000}>
							<img
								className="d-block w-100 slider_image"
								src={doc.url}
								alt="Slide"
							/>
						</Carousel.Item>
					))}
			</Carousel>
		</Container>
	);
}

export default Slider;
