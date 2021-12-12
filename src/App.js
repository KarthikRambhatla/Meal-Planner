import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import MainMenu from './components/MainMenu';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <Container style={{float: 'left', maxWidth: '100%', height: '100vh', padding: '0'}}>
      <MainMenu />
      <SideMenu />
    </Container>
  );
}

export default App;
