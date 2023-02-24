import React, { useState } from 'react';
import {useGlobalContext } from "../context";
import { ImSearch } from "react-icons/im";

function Search() {

  const { meals, handleSearch }= useGlobalContext();

  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
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
      </form>
    </div>
  )
}

export default Search;
