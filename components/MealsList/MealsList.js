import {StyleSheet, View, FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import MealItem from './MealItem';

function MealsList({items}){

    const navigation = useNavigation();

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
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});