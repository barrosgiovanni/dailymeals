import React from 'react';
import {useGlobalContext } from "../context";
import { AiOutlineLike } from "react-icons/ai";

function Meals() {

  const { meals, loading, selectMeal, addToFavourites }= useGlobalContext();

  const renderMeals = meals.map((meal) => {

    const { idMeal, strMeal: title, strMealThumb: image } = meal;

    return (
      <article key={idMeal} className='single-meal'>
        <img src={image} alt={title} className='img' onClick={() => selectMeal(idMeal)}/>
        <footer>
          <h6>{title}</h6>
          <button className='like-btn' onClick={() => addToFavourites(idMeal)}><AiOutlineLike/></button>
        </footer>
      </article>
    )

  })

  if (loading) {
    return <section className='section-center'><h2>Loading...</h2></section>
  }

  if (meals.length === 0) {
    return <section className='section-center'><h4>No matches were found. Please, try it again.</h4></section>
  }

  if (meals.length >= 1) {
    return <section className='section-center'>{renderMeals}</section>
  }

}

export default Meals;
