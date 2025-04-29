import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const scrollToAbout=()=>{
    const aboutSection=document.getElementById('About');
    if(aboutSection){
      aboutSection.scrollIntoView({behavior:'smooth', block:'start'});
    }
  };

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Awarely</Navbar.Brand>
            <div className="mx-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2 mx-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </div>
          <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link as={Link} className='mx-2' to="/">Home</Nav.Link>
            <Nav.Link className='mx-2' onClick={scrollToAbout}> About</Nav.Link>
            <Nav.Link className='mx-2' onClick={scrollToContactUs}>Support</Nav.Link>
            <Nav.Link as={Link} className='mx-2' to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className='mx-2' to="/subject">Subjects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
