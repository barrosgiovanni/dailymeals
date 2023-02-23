import React, { useContext } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {

  return (

    <AppContext.Provider value='hello'>
      {children}
    </AppContext.Provider>

  )

}

export { AppContext, AppProvider };
