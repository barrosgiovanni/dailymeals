import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
        console.log('data meals has values');
      } else {
        setMeals([]);
        console.log('data meals has no values');
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

  const handleSearch = (term) => {
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    fetchMeals(searchUrl);
  }

  return (
    <AppContext.Provider value={{ meals, loading, handleSearch }}>
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
