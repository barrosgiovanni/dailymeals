import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const AppContext = React.createContext();

const getFavouritesFromLocalStorage = () => {
  let favourites = localStorage.getItem('favourites');

  if (favourites) {
    favourites = JSON.parse(localStorage.getItem('favourites'));
  } else {
    favourites = [];
  }
  return favourites;
}

function AppProvider({ children }) {

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourites, setFavourites] = useState(getFavouritesFromLocalStorage());

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    }
    catch (error) {
      console.log(error.response)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, [])

  useEffect(() => {
    if (!searchTerm) return
      fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm])

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  }

  const selectMeal = (idMeal, favouriteMeal) => {
    let mealToSelect;
    if (favouriteMeal) {
      mealToSelect = favourites.find((meal) => meal.idMeal === idMeal);
    } else {
      mealToSelect = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(mealToSelect);
    setIsModalOpened(true);
  }

  const closeModal = () => {
    setIsModalOpened(false);
  }

  const addToFavourites = (idMeal) => {
    const favouriteMeal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyAdded = favourites.find((favourite) => favourite.idMeal === idMeal);
    if (alreadyAdded) return
    const updatedFavourites = [...favourites, favouriteMeal];
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  }

  const removeFromFavourites = (idMeal) => {
    const updatedFavourites = favourites.filter((favourite) => favourite.idMeal !== idMeal);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  }


  return (
    <AppContext.Provider

    value={{
      meals,
      loading,
      setSearchTerm,
      fetchRandomMeal,
      setIsModalOpened,
      isModalOpened,
      selectedMeal,
      selectMeal,
      closeModal,
      favourites,
      addToFavourites,
      removeFromFavourites
      }}
    >
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
