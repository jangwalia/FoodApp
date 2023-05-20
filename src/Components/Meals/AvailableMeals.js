import React from "react";
import Dummy_Meals from "../../data/Dummy";
import "./AvailableMeals.css";

function AvailableMeals() {
  const mealsList = Dummy_Meals.map((meal) => <li>{meal.name}</li>);
  return (
    <section className="meals">
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
