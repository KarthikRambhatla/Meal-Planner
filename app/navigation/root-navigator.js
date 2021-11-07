import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BreakfastPlate, LunchPlate, SnackPlate, DinnerPlate, SetMealsScreen } from '../components/screens'

const Tab = createBottomTabNavigator();

const renderMealTab = (focused, tabName) => {
  const imageSrc = focused 
    ? require(`../assets/images/${tabName}-tab.png`) 
    : require(`../assets/images/${tabName}-tab-inactive.png`);

    return <Image
      source={imageSrc}
      style={{width: 120, height: 26}}
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
            name="Breakfast"
            component={BreakfastPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, "breakfast")
            }}
        />
        <Tab.Screen
            name="Lunch"
            component={LunchPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, "lunch")
            }}
        />
        <Tab.Screen
            name="Snack"
            component={SnackPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, "snack")
            }}
        />
        <Tab.Screen
            name="Dinner"
            component={DinnerPlate}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, "dinner")
            }}
        />
        <Tab.Screen
            name="SetMeals"
            component={SetMealsScreen}
            options={{
              tabBarIcon: ({ focused }) => renderMealTab(focused, "set-meals")
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
