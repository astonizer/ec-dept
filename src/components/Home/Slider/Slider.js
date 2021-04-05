import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Slider.css';
import eced1 from '../../../slider/eced1.jpg';
import eced2 from '../../../slider/eced2.jpg';
import eced3 from '../../../slider/eced3.jpg';
import eced4 from '../../../slider/eced4.jpg';
import eced5 from '../../../slider/eced5.jpg';
import eced6 from '../../../slider/eced6.jpg';
import eced7 from '../../../slider/eced7.jpg';

function Slider() {
	return (
		<Container className="my-5">
			<Carousel fade>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced1}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced2}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced3}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced4}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced5}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced6}
						alt="Slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 slider_image"
						src={eced7}
						alt="Slide"
					/>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Slider;
