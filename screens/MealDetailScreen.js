import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.id;

  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const mealTitle = meal.title;
    navigation.setOptions({ 
        title: mealTitle, 
        headerRight: () => {
           return <Button title="Favorite" onPress={headerButtonPressHandler} />
        }
    });
  }, [meal, navigation, headerButtonPressHandler]);

  function headerButtonPressHandler(){
    console.log("Button pressed");
  }

  const details = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
  };

  return (
    <ScrollView  contentContainerStyle={styles.screen} >
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails {...details} textStyle={styles.textStyle} />
      <View style={styles.listContainer} >
        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  listContainer: {
    width: "90%",
  },
});
