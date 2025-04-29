
import { Row, Col, Container, Button } from 'react-bootstrap';
const HeroSection = () => {
    return (
        <div>
            <Container fluid style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }} className="bg-light py-5 my-5">
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-left">
                        <h1 className="display-4 font-weight-bold">Empower Yourself with Essential Life Skills</h1>
                        <p className="my-4">
                            Discover a wealth of knowledge on personal safety, sex education, traffic rules, and more. Our interactive quizzes and story-based modules are designed to educate and engage learners of all ages. Start your journey to a safer, smarter, and more informed life today.
                        </p>
                        <Button variant="primary" size="lg">Start Learning →</Button>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src="https://via.placeholder.com/600x400" alt="Hero" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection
