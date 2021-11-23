import * as React from 'react';
import { Text, View } from 'react-native';
import { Plate } from './Plate'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Set Meals!</Text>
    </View>
  );
}

export {BreakfastPlate, LunchPlate, SnackPlate, DinnerPlate, SetMealsScreen}