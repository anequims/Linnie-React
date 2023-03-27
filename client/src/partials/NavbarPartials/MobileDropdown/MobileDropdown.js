import { useState } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav.Link onClick={toggleOffcanvas}>Dropdown</Nav.Link>
      <Offcanvas show={isOpen} onHide={toggleOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dropdown Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Option 1</Nav.Link>
            <Nav.Link href="#">Option 2</Nav.Link>
            <Nav.Link href="#">Option 3</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomDropdown;
