import * as React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native'
import { Container, Row, Col } from 'react-bootstrap'
import { Mug, Glass } from '../components/drinks'

const Plate = (props) => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Container>
                <Row>
                    <Col xs={6}>
                        <ImageBackground
                            source={require(`../assets/images/plate/Plate.png`)}
                            style={{width: 600, height: 600}}
                        >
                    </ImageBackground>
                    </Col>
                    <Col xs={4}>
                        <Mug />
                        <Glass />
                    </Col>
                </Row>
            </Container>
        </SafeAreaView>
    );
  }

  export { Plate }
