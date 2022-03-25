import React, { useReducer } from 'react'
import { AppContext } from './AppContext';
import { Reducer } from './Reducer';

const initialState = {
  darkMode: {
    fontcolor: '#fff',
    background: '#33353E',
  },
  lightMode: {
    fontcolor: '#2d2d2d',
    background: '#cdcdcd',
  }
}

export const ThemeContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer,initialState);
  // console.log(state);

  return (
    <AppContext.Provider value={{state}}>{children}</AppContext.Provider>
  )
}

// Segundo Paso: Crear el ThemeContextProvider
// Creamos el estado incicial declarando los colores y se lo pasamos como estado a el useReducer.
// Renderizamos AppContext.Provider y le pasamos como prop el state y el children va por defecto.