import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function NavbarComponent({ setSearchQuery }) {
  let navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const scrollToSection = (id, stateKey) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { [stateKey]: true } });
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name'); // optional: clear other user data
    toast.success("User logged out successfully");
    navigate('/login');
  };

  React.useEffect(() => {
    if (location.state?.scrollToContactUs) {
      scrollToSection('contactUs', 'scrollToContactUs');
    }
    if (location.state?.scrollToAbout) {
      scrollToSection('About', 'scrollToAbout');
    }
  }, [location.state]);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        variant="dark"
        style={{
          background: 'linear-gradient(to right, #0D1A1F, #214551)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container fluid className="px-4">
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ color: '#66FCF1', fontWeight: 'bold', fontSize: '1.5rem' }}
            className="fustat-heading"
          >
            Awarely
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              {location.pathname === '/subject' && (
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 mx-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    style={{
                      minWidth: '250px',
                      maxWidth: '400px',
                      borderRadius: '20px',
                      padding: '0.5rem',
                    }}
                  />
                </Form>
              )}
            </Nav>
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link
                as={Link}
                onClick={() => scrollToSection('heroSection', 'scrollToHeroSection')}
                className="mx-2"
                to="/"
                style={{
                  color: location.pathname === '/' ? '#ffffff' : '#66FCF1',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#45A29E')}
                onMouseLeave={(e) =>
                  (e.target.style.color = location.pathname === '/' ? '#ffffff' : '#66FCF1')
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="mx-2"
                onClick={() => scrollToSection('About', 'scrollToAbout')}
                style={{
                  color: '#66FCF1',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#45A29E')}
                onMouseLeave={(e) => (e.target.style.color = '#66FCF1')}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="mx-2"
                onClick={() => scrollToSection('contactUs', 'scrollToContactUs')}
                style={{
                  color: '#66FCF1',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#45A29E')}
                onMouseLeave={(e) => (e.target.style.color = '#66FCF1')}
              >
                Support
              </Nav.Link>
              {isLoggedIn ? (
                <Nav.Link
                  onClick={handleLogout}
                  className="mx-2"
                  style={{
                    color: '#66FCF1',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#45A29E')}
                  onMouseLeave={(e) => (e.target.style.color = '#66FCF1')}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  className="mx-2"
                  to="/login"
                  style={{
                    color: '#66FCF1',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#45A29E')}
                  onMouseLeave={(e) => (e.target.style.color = '#66FCF1')}
                >
                  Login
                </Nav.Link>
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
