import {
  Container, 
  Form,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,  
} from 'react-bootstrap';
//Imagens
import lin_fill from './img/lin_fill.png';
import explore_fill from './img/explore_fill.png';
import skirt_fill from './img/skirt_fill.png';
import avatar from './img/avatar.png'

//Partials
import MobileDropdown from '../../partials/NavbarPartials/MobileDropdown/MobileDropdown';

//CSS
import './css/navbar.css'

function NavScrollExample() {
return (
  <>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={lin_fill} width="30" height="30" className="d-inline-block align-top" alt=""/>
            <h3 className="d-inline">Linnie</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="explore"><img src={explore_fill} width="30" height="30" alt="" /></Nav.Link>
              <Nav.Link href="skirt"><img src={skirt_fill} width="30" height="30" alt="" /></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className='rounded-pill me-2'
                aria-label="Search"
              />
            </Form>
            <NavDropdown title={<img src={avatar} width="30" height="30" alt="" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Log Out</NavDropdown.Item>
            </NavDropdown>
            <div className='mobile'><MobileDropdown/></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
);
}

export default NavScrollExample;
