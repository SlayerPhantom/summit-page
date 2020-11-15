import React from 'react';
import { Container } from 'react-bootstrap';
import computerData from '../images/sitting_at_computer.json';
import '../style.css';
import venueImg from '../images/venue.jpg';
export default function Video(props) {
	const computerLottieData = {
		loop: true,
		autoplay: true,
		animationData: computerData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div>
			<div className="backgroundWrapper">
				<Container>
					<Container className="row top-section">
						<div className="row vh-75 mb-5 top-section-2">
							<div className="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
								<h5
									className="text-center black"
									style={{ fontFamily: 'circular' }}
								></h5>
							</div>
							<h1 style={{ textAlign: 'center' }}>The Venue </h1>
						</div>
					</Container>
				</Container>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px',
					marginBottom: '20px',
					padding: '20px',
				}}
			>
				<img
					src={venueImg}
					alt="venue image"
					style={{ width: '360px', height: '320px' }}
				/>
			</div>
			<p style={{ textAlign: 'center' }}>20 W 34th St, New York, NY 10001</p>
		</div>
	);
}
