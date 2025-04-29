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
            <h2 className="text-center mb-4 fustat-heading"></h2>
            <Row className='align-content-center'>
                {filteredSubjects.length === 0 ? (
                     <Col className="text-center" style={{height: '50vh'}}>
                     <div className="p-4 bg-light rounded shadow-sm">
                         <h5>No subjects found</h5>
                         <p>Try adjusting your search or check back later.</p>
                     </div>
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
