import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigator'

export default function App() {
  const [appTitleName] = useState("Meal Planner");
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  ); 
}
