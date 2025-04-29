import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SubjectCard = ({ subject }) => {
    return (
        <>
            <style type="text/css">
                {`
                    .custom-card {
                        width: 20rem;
                        border-radius: 1rem;
                        background-color: white;
                        color: #4a5568;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .custom-image {
                        margin: -1.5rem 1rem 0;
                        height: 10rem;
                        background: linear-gradient(to right, #4299e1, #2b6cb0);
                        border-radius: 1rem;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
                    }

                    .custom-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 1rem;
                    }

                    .custom-card .card-body {
                        padding: 1.5rem;
                    }

                    .custom-card .card-title {
                        margin-bottom: 0.5rem;
                        // font-size: 1.25rem;
                        // font-weight: 600;
                        color: #1a202c;
                    }

                    .custom-card .card-text {
                        // font-size: 1rem;
                        // font-weight: 300;
                        color: inherit;
                    }

                    .custom-button {
                        display: block;
                        width: 100%;
                        border-radius: 0.5rem;
                        background-color: #4299e1;
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        padding: 0.75rem 1.5rem;
                        box-shadow: 0 4px 8px rgba(66, 153, 225, 0.25);
                        transition: all 0.3s;
                    }

                    .custom-button:hover {
                        box-shadow: 0 8px 16px rgba(66, 153, 225, 0.4);
                        background-color: #3182ce;
                    }

                    .custom-button:focus,
                    .custom-button:active {
                        opacity: 0.85;
                        box-shadow: none;
                    }
                `}
            </style>
            <Card className="custom-card my-4">
                <div className="custom-image">
                    <img src={subject.image} alt={subject.name} className="card-img" />
                </div>
                <Card.Body>
                    <Card.Title>{subject.name}</Card.Title>
                    <Card.Text>{subject.description}</Card.Text>
                    <Button className="custom-button">
                        Start →
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default SubjectCard;
