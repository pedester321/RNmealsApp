import { View, StyleSheet, Text , FlatList} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displeyedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem({item}){
    return <MealItem title={item.title}/>
  }

  return (
    <View style={styles.container}>
      <FlatList data={displeyedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
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
