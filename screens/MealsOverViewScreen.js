import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displeyedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  function renderMealItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealDetailScreen", {
        id: item.id,
      });
    }
    const mealItemsProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemsProps} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displeyedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
