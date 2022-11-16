import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";


export const Navegador = () => {
  return (
    <>
      <Navbar key={"md"} expand={"md"}>
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img src="src\assets\Images\Iconos\person-circle.svg" alt="" />
              Museo De Las Parrandas
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <Link to="/" className="cambiar">
                  <img
                    src="src\assets\Images\Iconos\person-circle.svg"
                    alt=""
                  />
                  Museo De Las Parrandas
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">  */}
                <Link to="/collecion" className="cambiar">
                  Colecciones
                </Link>
                {/* </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Link to="/visita" className="cambiar">
                  Visita
                </Link>
                <Link to="/eventos" className="cambiar">
                  Eventos
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
