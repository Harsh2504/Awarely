import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SubjectContext } from '../context/subjectContext';
import SubjectCard from '../components/SubjectCard';
import useAuth from '../hooks/useAuth';

const SubjectPage = ({ searchQuery }) => {
    useAuth();
    const { subjects } = useContext(SubjectContext);

    // Filter subjects based on search query
    const filteredSubjects = subjects.filter(subject => 
        subject.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // If user is not logged in, return null or redirect as needed
    if (localStorage.getItem('token') === null) {
        return null;
    }

    return (
        <Container className="mt-5 mx-sm-auto">
            <h2 className="text-center mb-4">Your Guide to Legal Rights and Personal Safety</h2>
            <Row className='align-content-center'>
                {filteredSubjects.length === 0 ? (
                    <Col>
                        <div>No subjects found.</div>
                    </Col>
                ) : (
                    filteredSubjects.map(subject => (
                        <Col key={subject._id} lg={4} md={6} sm={12} className="d-flex justify-content-center mb-4">
                            <SubjectCard subject={subject} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default SubjectPage;
