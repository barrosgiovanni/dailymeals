import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const [meals, setMeals] = useState([]);

  const fetchMeals = async (url) => {

    try {
      const { data } = await axios(url);
      setMeals(data.meals);
    }

    catch (error) {
      console.log(error.response)
    }

  }

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, [])

  return (
    <AppContext.Provider value={{ meals }}>
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
