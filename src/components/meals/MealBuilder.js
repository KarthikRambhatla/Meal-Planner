import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
// import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'

import BottomTabNavigator from '../navigation/BottomTabNavigator'
import { FullPlate, SnackPlate } from '../plate'
import { Mug, Glass } from './Drinks';
import SideMenu from '../menu/SideMenu';

const MealBuilder = (props) => {

    const plate = (props.name === "Snack") ? <SnackPlate /> : <FullPlate />;

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Container style={{float: 'left', height: '100vh', padding: '1%', backgroundColor: '#b7e0fe'}}>
                    <Row style={{ height: '100%' }}>
                        <Col xs='6' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {plate}
                        </Col>
                        <Col xs='2' style={{ height: '100%' }}>
                            <Row xs='6' style={{ height: '50%' }}>
                                <Glass />
                            </Row>
                            <Row xs='6' style={{ height: '50%' }}>
                                <Mug />
                            </Row>
                        </Col>
                        <Col xs='4' style={{ height: '100%' }}>
                            <SideMenu />
                        </Col>
                    </Row>
                </Container>
            </DndProvider>
            <BottomTabNavigator activeTab={props.name} />
        </>);
}

export { MealBuilder }