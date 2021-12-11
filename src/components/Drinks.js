import * as React from 'react';
import { Image } from 'react-bootstrap';
import cupImage from '../assets/images/cup/Cup-empty.png';
import glassImage from '../assets/images/cup/Glass-empty.png';

const Drink = (props) => {
  let drinkImage;
  if (props.name === 'Mug') {
    drinkImage = cupImage;
  } else {
    drinkImage = glassImage;
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <Image src={drinkImage} style={{ width: 150, height: 150 }}></Image>
    </div>
  );
};

function Mug() {
  return <Drink name="Mug" />;
}

function Glass() {
  return <Drink name="Glass" />;
}

export { Mug, Glass };
