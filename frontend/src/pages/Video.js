import React from 'react';
import { Container } from 'react-bootstrap';
import Lottie from 'react-lottie';
import computerData from '../images/sitting_at_computer.json';
import ReactPlayer from 'react-player';
import '../style.css';

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
							<div className="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
								<Lottie options={computerLottieData} height={400} width={400} />
							</div>
							<div className="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
								<h1
									className="text-center black"
									style={{ fontFamily: 'circular' }}
								>
									Promotional Video
								</h1>
								<h5
									className="text-center black"
									style={{ fontFamily: 'circular' }}
								>
									{/* Promotional Video by uBreakiFix. The video address all the
									details of the 2020 uBreakiFix summit event. Event times and
									venue information is also included. */}
								</h5>
							</div>
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
				}}
			>
				<ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
			</div>

			{/* <CustomFooter /> */}
		</div>
	);
}
