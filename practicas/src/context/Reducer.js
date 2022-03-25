import React from 'react'

export const Reducer = (state, action) => {
    switch (action.type) {
      case "dark&light": {
        return {
          ...state,
        };
      }
    }
  };

//Necesito investigar sobre los reducers de useContext;
// Este es como el segundo parametro de useReducer.