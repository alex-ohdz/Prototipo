
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export const Navegador = () => {
  return (
    <>
        <Navbar key={'md'} expand={'md'}>
          <Container fluid>
            <Link to="/"><Navbar.Brand><img src="src\Images\Iconos\person-circle.svg" alt="" />Museo De Las Parrandas</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${'md'}`}>
                <Link to="/" className='cambiar'><img src="src\Images\Iconos\person-circle.svg" alt="" />Museo De Las Parrandas</Link>
                </Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Link to="/visita" className='cambiar'>Visita</Link>
                  <Link to="/eventos" className='cambiar'>Eventos</Link>
                  <Link to="/collecion" className='cambiar'>Colecciones</Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${'md'}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

