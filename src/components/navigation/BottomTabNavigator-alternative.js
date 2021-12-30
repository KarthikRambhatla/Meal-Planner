// This is a version of the nav bar that theoretically should not flash when changing 
// tab routes for the first time. The app would just need to be refactored to render the
// nav bar outside of the meal routes

import React, { useState } from 'react';
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Tabs } from '../../models/Tabs'

const BottomTabNavigator = () => {

  const [activeTab, setActiveTab] = useState("Breakfast");

  const isActiveTab = (tabName) => {
    console.log(`Current: ${tabName}, Active: ${activeTab}`);
    return (activeTab === tabName);
  }
  
  const renderImage = (tab) => {
    if (isActiveTab(tab.label)) {
      return <Image src={tab.active} style={{maxWidth: '100%'}}/>;
    }

    return <Image src={tab.inactive} style={{maxWidth: '100%'}}/>;;
  }

  return (
    <Navbar expand="lg" fixed="bottom" style={{maxWidth: '80%', padding: '0'}}>
    <Container style={{margin: 0, maxWidth: '100%', padding: '0'}}>
        <Nav
          className="me-auto"
          defaultActiveKey="Breakfast"
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
            {
              Tabs.map((tab, index) => (
                <Nav.Link as={NavLink} to={tab.route} key={`tab-${index}`} eventKey={tab.label} className="meal-tab" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '4'}}>
                  {renderImage(tab)}
                </Nav.Link>
              ))
            }
        </Nav>
    </Container>
  </Navbar>
  );

}

export default BottomTabNavigator;
