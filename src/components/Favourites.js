import React from 'react';
import {useGlobalContext } from "../context";
import { IoIosRemoveCircle } from "react-icons/io";

function Favourites() {

  const { favourites, removeFromFavourites, selectMeal } = useGlobalContext();

  const renderFavourites = favourites.map((favourite) => {

    const { idMeal, strMeal: title, strMealThumb: image } = favourite;

    return (
      <div key={idMeal} className="favorite-item" >
        <img src={image} className="favourites-img img" alt={title} onClick={() => selectMeal(idMeal)}/>
        <button className='remove-btn' onClick={() => removeFromFavourites(idMeal)}><IoIosRemoveCircle /></button>
      </div>
    )
  })

  return (
    <section className="favourites">
      <div className="favourites-content">
        <h5>Favourites</h5>
        <div className="favourites-container">
          {renderFavourites}
        </div>
      </div>
    </section>
  )
}

export default Favourites;
