import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavbarComponent({ setSearchQuery }) {
  let navigate = useNavigate();
  const location1 = useLocation();
  const location2 = useLocation();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
      navigate('/', { state: { scrollToContactUs: true } });
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const scrollToHeroSection = () => {
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
      navigate('/', { state: { scrollToHeroSection: true } });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("User logged out successfully");
    navigate('/login');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
      navigate('/', { state: { scrollToAbout: true } });
    }
  };

  React.useEffect(() => {
    if (location1.state && location1.state.scrollToContactUs) {
      const contactSection = document.getElementById('contactUs');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location1.state]);

  React.useEffect(() => {
    if (location2.state && location2.state.scrollToAbout) {
      const aboutSection = document.getElementById('About');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location2.state]);

  return (
    <>
      <Navbar expand="lg" sticky="top" variant="dark" style={{ background: 'linear-gradient(to right, #0D1A1F, #214551)' }}>
        <Container fluid className='mx-5'>
          <Navbar.Brand as={Link} to="/" style={{ color: '#66FCF1' }}>Awarely</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2 mx-2"
                  aria-label="Search"
                  onChange={handleSearch} // Update search query on change
                  style={{ minWidth: '250px', maxWidth: '400px' }} // Adjust the width as needed
                />
              </Form>
            </Nav>
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link as={Link} onClick={scrollToHeroSection} className='mx-2' to="/" style={{ color: '#66FCF1' }}>Home</Nav.Link>
              <Nav.Link className='mx-2' onClick={scrollToAbout} style={{ color: '#66FCF1' }}>About</Nav.Link>
              <Nav.Link className='mx-2' onClick={scrollToContactUs} style={{ color: '#66FCF1' }}>Support</Nav.Link>
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout} className='mx-2' style={{ color: '#66FCF1' }}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} className='mx-2' to="/login" style={{ color: '#66FCF1' }}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
