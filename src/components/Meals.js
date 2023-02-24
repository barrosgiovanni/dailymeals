import React from 'react';
import {useGlobalContext } from "../context";
import { AiOutlineLike } from "react-icons/ai";

function Meals() {

  const { meals }= useGlobalContext();

  const renderMeals = meals.map((meal) => {

    const { idMeal, strMeal: title, strMealThumb: image } = meal

    return (
      <article key={idMeal} className='single-meal'>
        <img src={image} className='img'/>
        <footer>
          <h5>{title}</h5>
          <AiOutlineLike className='like-btn'/>
        </footer>
      </article>
    )

  })

  return (

    <section className='section-center'>{renderMeals}</section>

  )

}

export default Meals;
