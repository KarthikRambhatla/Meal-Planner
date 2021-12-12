import * as React from 'react';
import { Container } from 'react-bootstrap';
import RootNavigation from './NavComponents/RootNavigation';
import Plate from './Plate';

class MainMenu extends React.Component{

    render(){
        return(
        <Container className='bg-primary' style={{float: 'left', maxWidth: '80%', height: '100vh', padding: '1%' }}>
            <Plate />
            <RootNavigation />
        </Container>
        );
    }
}

export default MainMenu;