import React from "react";
import '../Testimonials/style.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const PreviousClients = ({ imgLink1, imgLink2, imgLink3 }) => (
    <div className="testimonialsWrapper">
        <h1>Testimonials</h1>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={imgLink1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={imgLink2} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={imgLink3} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer> */}
            </Card>
        </CardDeck>
    </div>
);

export default PreviousClients;