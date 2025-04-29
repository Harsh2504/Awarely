import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5" style={{ background: 'linear-gradient(to right, #0D1A1F, #214551)' }}>
      <Container>
        <Row className='justify-content-evenly'>
          <Col md={4}>
            <h5>Awarely</h5>
            <p>
              Awarely provides essential learning resources for all ages. Empower yourself with knowledge.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: redhousedtech@gmail.com</p>
            <p>Phone: +91 988xxxxxxx</p>
            <div className="d-flex">
              <a href="https://www.facebook.com" className="text-white me-3"><Image size={30} /></a>
              <a href="https://www.twitter.com" className="text-white me-3"><Image size={30} /></a>
              <a href="https://www.instagram.com" className="text-white me-3"><Image size={30} /></a>
              <a href="https://www.linkedin.com" className="text-white"><Image size={30} /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-top border-secondary my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Awarely. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
