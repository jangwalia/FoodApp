import React from "react";
import { DUMMY_MEALS } from "../../data/Dummy";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
