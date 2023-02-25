import React from 'react';
import {useGlobalContext } from "../context";
import { TfiYoutube } from "react-icons/tfi";

function Modal() {

  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    idMeal,
    strMeal: title,
    strMealThumb: image,
    strInstructions: description,
    strYoutube: youtube,
    strCategory: category,
    strArea: origin
  } = selectedMeal;

  return (
    <aside className='modal-overlay' onClick={closeModal}>
      <div className='modal-container'>
        <img className='modal-img' src={image} alt={idMeal}/>
        <div className='modal-content'>
          <h3>{title}</h3>
          <h5>Category: {category}</h5>
          <h5>Origin: {origin}</h5>
          <a href={youtube} target="_blank" rel='noreferrer'><TfiYoutube className='btn-youtube'/></a>
          <h5>Description:</h5>
          <p>{description}</p>
        </div>
      </div>
    </aside>
  )
}

export default Modal;
