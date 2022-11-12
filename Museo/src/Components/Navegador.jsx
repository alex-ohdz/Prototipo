
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Route, Routes } from "react-router-dom";
// import { Colleccion } from "./CollectionPages/Colleccion";
// import { MuseoApp } from './MuseoApp';
export const Navegador = () => {
  return (
    <>
        <Navbar key={'md'} expand={'md'}>
          <Container fluid>
            <Navbar.Brand href="#"><span><img src="src\Images\Iconos\person-circle.svg" alt="" /></span>Museo De Las Parrandas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                <span><img src="src\Images\Iconos\person-circle.svg" alt="" /></span>Museo De Las Parrandas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="#action1">Visita</Nav.Link>
                  <Nav.Link href="#action2">Eventos</Nav.Link>
                  <Nav.Link to="/collecion">Colecciones</Nav.Link>
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

