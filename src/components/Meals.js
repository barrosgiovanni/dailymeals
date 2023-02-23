import React, { useContext } from 'react';
import { AppContext } from "../context";

function Meals() {

  const context = useContext(AppContext);

  console.log(context);

  return (

    <div>Meals</div>

  )

}

export default Meals;
