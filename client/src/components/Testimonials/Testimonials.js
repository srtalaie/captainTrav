import React from "react";
import '../Testimonials/style.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const PreviousClients = () => (
    <div className="testimonialsWrapper">
        <h1>Testimonials</h1>
        <CardDeck>
            <Card>
                <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Director of Lab at 23 and Me</Card.Subtitle>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada orci libero, a luctus turpis tristique sed. Integer et orci arcu. Proin sollicitudin est dignissim dolor mattis, sit amet molestie libero lobortis. Suspendisse sit amet hendrerit lectus. Donec libero ipsum, accumsan eu lorem id, convallis molestie nibh. Integer egestas blandit libero, et aliquam turpis molestie sit amet. Sed vulputate metus sollicitudin est dapibus, at efficitur velit bibendum."
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Horse Breeder at Woodranch</Card.Subtitle>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada orci libero, a luctus turpis tristique sed. Integer et orci arcu. Proin sollicitudin est dignissim dolor mattis, sit amet molestie libero lobortis. Suspendisse sit amet hendrerit lectus. Donec libero ipsum, accumsan eu lorem id, convallis molestie nibh. Integer egestas blandit libero, et aliquam turpis molestie sit amet. Sed vulputate metus sollicitudin est dapibus, at efficitur velit bibendum. Nulla rhoncus nisi eu nisi fermentum, id ultrices tortor blandit. Suspendisse urna eros, hendrerit eu malesuada pulvinar, dignissim non nulla. Nam at blandit augue.""
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>John Smith</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Research Lead at UCSD Bio Lab</Card.Subtitle>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada orci libero, a luctus turpis tristique sed. Integer et orci arcu. Proin sollicitudin est dignissim dolor mattis, sit amet molestie libero lobortis. Suspendisse sit amet hendrerit lectus."
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Business done on July 4th, 1776</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>
);

export default PreviousClients;