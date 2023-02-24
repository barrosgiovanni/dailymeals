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
        <img src={image} alt={idMeal}/>
        <h2>{title}</h2>
        <h4>Category: {category}</h4>
        <h4>Origin: {origin}</h4>
        <a href={youtube}><TfiYoutube className='btn-youtube'/></a>
        <p>Description: {description}</p>
      </div>
    </aside>
  )
}

export default Modal;
