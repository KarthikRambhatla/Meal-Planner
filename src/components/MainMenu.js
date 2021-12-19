import * as React from 'react';
import { Container } from 'react-bootstrap';
import RootNavigation from './navigation/MealTabNavigator';
import Plate from './Plate';

class MainMenu extends React.Component{

    render(){
        return(
        <Container style={{float: 'left', maxWidth: '80%', height: '100vh', padding: '1%', backgroundColor: '#b7e0fe'}}>
            <Plate />
            <RootNavigation />
        </Container>
        );
    }
}

export default MainMenu;