import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import * as React from 'react';

class RootNavigation extends React.Component {
  render() {
    return (
      <Navbar bg="secondary" expand="lg" fixed="bottom" style={{maxWidth: '80%'}}>
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Breakfast</Nav.Link>
              <Nav.Link href="#home">Lunch</Nav.Link>
              <Nav.Link href="#home">Snack</Nav.Link>
              <Nav.Link href="#home">Dinner</Nav.Link>
              <Nav.Link href="#home">Set Meals</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default RootNavigation;
