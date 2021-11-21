import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Drink = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
}

function Mug() {
  return (
    <Drink style={styles.innerText} name="Mug"/>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: '#000'
    },
    innerText: {
      color: 'black'
    }
});

export { Mug }