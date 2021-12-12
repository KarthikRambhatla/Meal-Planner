import * as React from 'react';
import plateImage from '../assets/images/plate/Plate.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Mug, Glass } from '../components/Drinks';

class Plate extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Container className='bg-success' style={{ maxWidth: '100%', height: '100%', overflow: 'auto'}}>
        <Row style={{ height: '100%'}}>
          <Col xs='10' style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image
              alt="Plate"
              src={plateImage}
              style={{ height: '100%', objectFit: 'contain' }}
            />
          </Col>
          <Col xs='2' style={{ height: '100%'}}>
            <Row xs='6' style={{ height: '50%'}}>
              <Glass />
            </Row>
            <Row xs='6' style={{ height: '50%'}}>
              <Mug />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plate;
