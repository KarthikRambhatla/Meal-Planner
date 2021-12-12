import * as React from 'react';
import { Container } from 'react-bootstrap';
import Plate  from '../components/Plate';

function BreakfastPlate() {
  return (
    <Plate name="Breakfast"/>
  );
}

function LunchPlate() {
  return (
    <Plate name="Lunch"/>
  );
}

function SnackPlate() {
  return (
    <Plate name="Snack"/>
  );
}

function DinnerPlate() {
  return (
    <Plate name="Dinner"/>
  );
}

function SetMealsScreen() {
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <div>Set Meals!</div>
    </Container>
  );
}

export {BreakfastPlate, LunchPlate, SnackPlate, DinnerPlate, SetMealsScreen}