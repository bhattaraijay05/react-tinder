import React, {createContext, useReducer, useContext} from 'react';
// This is the data layer
export const StateContext = createContext();
// Building the provider
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Using these datas to the other components

export const useStateValue = () => useContext(StateContext);
