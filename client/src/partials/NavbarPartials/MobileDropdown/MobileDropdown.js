import { useState } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//CSS
import styles from './css/mobile.module.css'

//Imagens
import menuIcon from './img/menu-icon.svg'

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobile}>
      <Nav.Link onClick={toggleOffcanvas}> <img src={menuIcon} alt="" width={30} height={30}/> </Nav.Link>
      <Offcanvas show={isOpen} onHide={toggleOffcanvas} placement="end" className={styles.Offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><Link to="/user"> Perfil </Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/skirt">Saias</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/settings">Configurações</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default CustomDropdown;
