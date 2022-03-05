import * as React from 'react';
import { Container } from 'react-bootstrap';
import { FoodGrid } from '../menu/FoodGrid';

class SideMenu extends React.Component{

    render(){
        return(
        <Container className='bg-warning' style={{float: 'left', height:'100%'}}>
            <h1>SideMenu!</h1>
            <FoodGrid />
        </Container>
        );
    }
}

export default SideMenu;