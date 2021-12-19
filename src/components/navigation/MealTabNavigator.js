import React from 'react';
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Tab } from '../../models/Tab'
// import { Link, Route } from "react-router-dom";

const MealTabNavigator = () => {
  
  const renderMealTab = (focused, tabName) => {
    console.log(tabName);
    const imageSrc = focused 
      ? require(`../../assets/images/menu/${tabName}-active.png`).default
      : require(`../../assets/images/menu/${tabName}.png`).default;
  
      return <Image
        src={imageSrc}
        style={{width: 240, height: 60}}
      />
  }

  return (
    <Navbar expand="lg" fixed="bottom" style={{maxWidth: '80%'}}>
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="#breakfast">
              {renderMealTab(true, Tab.Breakfast)}
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

export default MealTabNavigator;
