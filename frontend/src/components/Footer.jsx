
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Awarely</h5>
            <p>
              Awarely provides essential learning resources for all ages. Empower yourself with knowledge.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/about" className="text-white">About</Nav.Link>
              <Nav.Link href="/support" className="text-white">Support</Nav.Link>
              <Nav.Link href="/login" className="text-white">Login</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@Awarely.com</p>
            <p>Phone: +123 456 7890</p>
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
            <p className="mb-0">© 2025 Awarely. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
