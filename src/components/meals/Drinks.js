import * as React from 'react';
import { Container, Image } from 'react-bootstrap';
import cupImage from '../../assets/images/cup/Cup-empty.png';
import glassImage from '../../assets/images/cup/Glass-empty.png';

const Drink = (props) => {
  let drinkImage;
  let imageWidth;
  
  if (props.name === 'Mug') {
    drinkImage = cupImage;
    imageWidth = '110%';
  } else {
    drinkImage = glassImage;
    imageWidth = '100%';
  }

  return (
    <Container style={{ width: '100%', height: '100%', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image src={drinkImage} style={{ width: imageWidth, objectFit: 'contain', marginTop: '20px', marginBottom: '20px', marginRight: '30px'}}></Image>
    </Container>
  );
};

function Mug() {
  return <Drink name="Mug" />;
}

function Glass() {
  return <Drink name="Glass"  />;
}

export { Mug, Glass };
