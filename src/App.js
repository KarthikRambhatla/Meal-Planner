import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import { Breakfast } from './components/meals/Breakfast';

function App() {
  return (
    <BrowserRouter>
      <Container style={{float: 'left', maxWidth: '100%', height: '100vh', padding: '0'}}>
        <Breakfast />
      </Container>
    </BrowserRouter>
  );
}

export default App;
