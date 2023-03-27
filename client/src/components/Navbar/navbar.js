import {
  Container, 
  Form,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,  
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
//Imagens
import lin_fill from './img/lin_fill.png';
import explore_fill from './img/explore_fill.png';
import skirt_fill from './img/skirt_fill.png';
import lin_border from './img/lin_border.png';
import explore_border from './img/explore_border.png';
import skirt_border from './img/skirt_border.png';
import avatar from './img/avatar.png'

//Partials
import MobileDropdown from '../../partials/NavbarPartials/MobileDropdown/MobileDropdown';

//CSS
import styles from './css/navbar.module.css'

function NavScrollExample() {
  const location = useLocation();
  let lin;
  let explore;
  let skirt;
  if (location.pathname === '/') {
    lin = lin_fill;
  } else {
    lin = lin_border;
  }
  if (location.pathname === '/explore') {
    explore = explore_fill;
  } else {
    explore = explore_border;
  }
  if (location.pathname === '/skirt') {
    skirt = skirt_fill;
  } else {
    skirt = skirt_border;
  }
return (
  <>
    <Navbar className={`${styles.navbar} fixed-top`}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={lin} width="30" height="30" className={`${styles} d-inline-block align-top`} alt=""/>
          <h3 className="d-inline">Linnie</h3>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`${styles.nav} me-auto`}>
        <Nav.Link href="explore"><img src={explore} width="30" height="30" alt="" /></Nav.Link>
        <Nav.Link href="skirt"><img src={skirt} width="30" height="30" alt="" /></Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className={`rounded-pill me-2 ${styles.input}`}
          aria-label="Search"
        />
      </Form>
      <NavDropdown title={<img src={avatar} width="30" height="30" alt="" />}>
          <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Log Out</NavDropdown.Item>
        </NavDropdown>
        <div className={styles.mobile}><MobileDropdown/></div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
);
}

export default NavScrollExample;
