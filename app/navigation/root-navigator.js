import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BreakfastPlate, LunchPlate, SnackPlate, DinnerPlate, SetMealsScreen } from '../components/screens'
import { Tabs } from '../constants'

const Tab = createBottomTabNavigator();

const renderMealTab = (focused, tabName) => {
  const imageSrc = focused 
    ? require(`../assets/images/menu/${tabName}-active.png`)
    : require(`../assets/images/menu/${tabName}.png`);

    return <Image
      source={imageSrc}
      style={{width: 240, height: 60}}
    />
}

function RootNavigation() {
  // const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Tab.Navigator 
        screenOptions={{ 
          "tabBarShowLabel": false,
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}
      >
        <Tab.Screen
            name={Tabs.Breakfast}
            component={BreakfastPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, Tabs.Breakfast)
            }}
        />
        <Tab.Screen
            name={Tabs.Lunch}
            component={LunchPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, Tabs.Lunch)
            }}
        />
        <Tab.Screen
            name={Tabs.Snack}
            component={SnackPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, Tabs.Snack)
            }}
        />
        <Tab.Screen
            name={Tabs.Dinner}
            component={DinnerPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, Tabs.Dinner)
            }}
        />
        <Tab.Screen
            name={Tabs.SetMeal}
            component={SetMealsScreen}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, Tabs.SetMeal)
            }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  innerText: {
    color: 'white'
  }
});

export default RootNavigation;
