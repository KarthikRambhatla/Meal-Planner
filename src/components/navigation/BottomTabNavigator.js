import React from 'react';
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Tabs } from '../../models/Tabs'

const BottomTabNavigator = ({activeTab}) => {

  const isActiveTab = (tabName) => {
    // console.log(`Current: ${tabName}, Active: ${activeTab}`);
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
        >
            {
              Tabs.map((tab, index) => (
                <NavLink to={tab.route} key={`tab-${index}`} className="meal-tab" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '4'}}>
                  {renderImage(tab)}
                </NavLink>
              ))
            }
        </Nav>
    </Container>
  </Navbar>
  );

}

export default BottomTabNavigator;
