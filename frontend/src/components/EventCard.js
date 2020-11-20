import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function EventCard({ photo, title, when, where }) {
	return (
		<Card>
			<Card.Img variant="top" src={photo} style={{ height: '15rem' }} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				{/* {text && <Card.Text>{text}</Card.Text>} */}
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>{where}</ListGroupItem>
				<ListGroupItem>{when} </ListGroupItem>
			</ListGroup>
		</Card>
	);
}
