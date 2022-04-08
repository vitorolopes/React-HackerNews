import React, { useContext, useReducer } from 'react';
import reducer from './reducer'

const AppContext = React.createContext();

const initialState ={
    isLoading: true, // Stories
    // query: "react",  SearchForm
    // stories: [], Stories
    // page: 0, Buttons
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider value={
            {...state } 
        }>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 