import React from 'react';
import {useGlobalContext } from "../context";

function Meals() {

  const { meals }= useGlobalContext();
  const generateUniqueId = require('generate-unique-id');

  const renderMeals = meals.map((meal) => {

    return (
      <div key={generateUniqueId()}>
        <h2>{meal.strMeal}</h2>
      </div>
    )

  })

  return (

    <div>{renderMeals}</div>

  )

}

export default Meals;
