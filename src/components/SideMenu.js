import * as React from 'react';
import { Container } from 'react-bootstrap';

class SideMenu extends React.Component{

    render(){
        return(
        <Container className='bg-warning' style={{float: 'left', maxWidth: '20%', height:'100%'}}>
            <h1>SideMenu!</h1>
        </Container>
        );
    }
}

export default SideMenu;