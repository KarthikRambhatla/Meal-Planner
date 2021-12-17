import { Navbar, Container, Nav, Image } from "react-bootstrap";
import * as React from 'react';
import { Tabs } from '../../models/Tabs'

class RootNavigation extends React.Component {
  //make constructor with var for focused field
  
  renderMealTab(focused, tabName){
    console.log(tabName);
    const imageSrc = focused 
      ? require(`../../assets/images/menu/${tabName}-active.png`).default
      : require(`../../assets/images/menu/${tabName}.png`).default;
  
      return <Image
        src={imageSrc}
        style={{width: 240, height: 60}}
      />
  }

  render() {
    return (
      <Navbar bg="secondary" expand="lg" fixed="bottom" style={{maxWidth: '80%'}}>
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="#breakfast">
                {this.renderMealTab(true, Tabs.Breakfast)}
              </Nav.Link>
              <Nav.Link href="#lunch">Lunch</Nav.Link>
              <Nav.Link href="#snack">Snack</Nav.Link>
              <Nav.Link href="#dinner">Dinner</Nav.Link>
              <Nav.Link href="#custom">Set Meals</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default RootNavigation;
