import { useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(route.params.id);

  const mealId = route.params.id;

  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const mealTitle = meal.title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  const details = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails {...details} textStyle={styles.textStyle} />
      <View style={styles.listContainer}>
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
