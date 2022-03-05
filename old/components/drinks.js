import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const Drink = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <ImageBackground
        source={require(`../assets/images/cup/Cup-empty.png`)}
        // source={require(props.imagePath)}
        style={{width: 150, height: 150}}
      >
      </ImageBackground>
    </View>
  );
}

function Mug() {
  return (
    <Drink style={styles.innerText} name="Mug"/>
  );
}

function Glass() {
  return (
    <View className="d-none">
      <Drink style={styles.innerText} name="Glass"/>
    </View>
  );
}

const styles = StyleSheet.create({
    mainDrinkView:{
      flex: 2
    },
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

export { Mug, Glass }