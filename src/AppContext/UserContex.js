import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [order, setOrder] = useState([]);

  return (
    <UserContext.Provider value={{order, setOrder}}>
      {children}
    </UserContext.Provider>
  );
};
