import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const navigate = useNavigate();

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
                        overflow: hidden; 
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
                        color: #1a202c;
                    }

                    .custom-card .card-text {
                        color: inherit;
                    }

                    .custom-button {
                        display: inline-block;
                        width: 100%;
                    
                        border-radius: 0.7539rem;
                        box-sizing: border-box;
                        background-color: #0089EA; /* Updated background color */
                        color: #ffffff; /* Updated text color to white */
                        font-size: 16px;
                        font-weight: 600;
                        line-height: normal;
                        margin: 0;
                        min-height: 3em; /* Decreased button height */
                        min-width: 0;
                        outline: none;
                        padding: 0.75em 2em; /* Adjusted padding */
                        text-align: center;
                        text-decoration: none;
                        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
                        user-select: none;
                        -webkit-user-select: none;
                        touch-action: manipulation;
                        will-change: transform;
                        cursor: pointer;
                    }

                    .custom-button:disabled {
                        pointer-events: none;
                    }

                    .custom-button:hover {
                        color: #fff;
                        background-color: #2a67b6; /* Darker shade for hover */
                        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
                        transform: translateY(-2px);
                    }

                    .custom-button:active {
                        box-shadow: none;
                        transform: translateY(0);
                    }
                `}
            </style>
            <Card className="custom-card my-4">
                <div className="custom-image">
                    <img src={subject.imageUrl} alt={subject.name} className="card-img" />
                </div>
                <Card.Body>
                    <Card.Title>{subject.name}</Card.Title>
                    <Card.Text className='mb-3'>{subject.description}</Card.Text>
                    <Button
                        className="custom-button"
                        onClick={() => navigate(`/concept`, { state: { subject } })}
                        style={{ cursor: 'pointer' }}
                    >
                        Start
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default SubjectCard;
