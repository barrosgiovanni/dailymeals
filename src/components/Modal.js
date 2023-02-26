import React from 'react';
import {useGlobalContext } from "../context";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Modal() {

  const { selectedMeal, closeModal, favourites, addToFavourites, removeFromFavourites } = useGlobalContext();

  const {
    idMeal,
    strMeal: title,
    strMealThumb: image,
    strInstructions: description,
    strYoutube: youtube,
    strCategory: category,
    strArea: origin
  } = selectedMeal;

  const starred = favourites.find((favourite) => favourite.idMeal === idMeal);

  const handleStarring = () => {
    if (starred) {
      removeFromFavourites(idMeal);
    } else {
      addToFavourites(idMeal);
    }
  }

  return (
    <aside className='modal-overlay' onClick={closeModal}>
      <div className='modal-container'>
        <img className='img modal-img' src={image} alt={idMeal}/>
        <div className='modal-content'>
          <h3>{title}</h3>
          <h5>Category: {category}</h5>
          <h5>Origin: {origin}</h5>
          <a href={youtube} target="_blank" rel='noreferrer'><TfiYoutube className='btn-youtube'/></a>
          <button className='btn-star' onClick={handleStarring}>{ starred ? <AiFillStar className='btn-filled-star'/> : <AiOutlineStar />}</button>
          <h5>Description:</h5>
          <p>{description}</p>
        </div>
      </div>
    </aside>
  )
}

export default Modal;
