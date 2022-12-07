import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Navegador = () => {
  return (
    <>
      <Navbar collapseOnSelect key={'md'} expand={'md'}>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand>
              {/* <img src="src\assets\Images\Iconos\person-circle.svg" alt="" /> */}
              Museo De Las Parrandas
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'md'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
            placement='top'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                <Link to='/' className='cambiar'>
                  {/* <img
                    src="src\assets\Images\Iconos\person-circle.svg"
                    alt=""
                  /> */}
                  Museo De Las Parrandas
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='cabecera container-fluid'>
                <NavDropdown
                  className='cambiar Headers'
                  title='Colleccion' 
                  id='nav-dropdown'
                >
                  <NavDropdown.Item>
                    <Link to='/arte' className='cambiar'>
                      Arte
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/fotografia' className='cambiar'>
                      Fotografia
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/documentos' className='cambiar'>
                      Documentos
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/historia' className='cambiar'>
                      Historia
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Link to='/visita' className='colleccion cambiar Headers'>
                  Visita
                </Link>

                <Link to='/eventos' className='colleccion cambiar Headers'>
                  Eventos
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
