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
      <Container>
        <Row>
          <Col>
            <Image
              alt="Plate"
              src={plateImage}
              style={{ width: 600, height: 600 }}
            />
          </Col>
          <Col>
            <Mug />
            <Glass />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plate;
