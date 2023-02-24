import React, { useState } from 'react';
import {useGlobalContext } from "../context";
import { ImSearch } from "react-icons/im";

function Search() {

  const { setSearchTerm, fetchRandomMeal }= useGlobalContext();

  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (term) {
      setSearchTerm(term);
    }
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleRandom = () => {
    fetchRandomMeal();
    setTerm('');
    setSearchTerm('');
  }

  return (
    <div className='search-container' onSubmit={handleSubmit}>
      <form>
        <input
          className='form-input'
          type='text'
          name='term'
          value={term}
          placeholder='please, type a search term...'
          onChange={handleChange}>
        </input>
        <button type='submit' className='search-btn'><ImSearch /></button>
        <button type="button" className="btn btn-hipster" onClick={handleRandom}>Suprise me !</button>
      </form>
    </div>
  )
}

export default Search;
