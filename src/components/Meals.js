import React from 'react';
import {useGlobalContext } from "../context";
import { AiOutlineLike } from "react-icons/ai";

function Meals() {

  const { meals, loading }= useGlobalContext();

  const renderMeals = meals.map((meal) => {

    const { idMeal, strMeal: title, strMealThumb: image } = meal

    return (
      <article key={idMeal} className='single-meal'>
        <img src={image} className='img'/>
        <footer>
          <h6>{title}</h6>
          <button className='like-btn'><AiOutlineLike/></button>
        </footer>
      </article>
    )

  })

  if (loading) {
    return <section className='section-center'><h2>Loading...</h2></section>
  }

  if (meals.length === 0) {
    return <section className='section-center'><h2>No items found :/</h2></section>
  }

  if (meals.length >= 1) {
    return <section className='section-center'>{renderMeals}</section>
  }






}

export default Meals;
