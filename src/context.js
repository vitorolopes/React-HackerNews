import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer'

const AppContext = React.createContext();

const initialState ={
    isLoading: true, // Stories
    query: "react",  // SearchForm
    stories: [], // Stories
    // page: 0, Buttons
}

const API_ENDPOINT =   `http://hn.algolia.com/api/v1/search?query=` 

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        dispatch({type: "SET_STORIES", payload: data.hits})
        dispatch({type: "SET_LOADING"})
    }

    useEffect(() => {
      fetchStories(`${API_ENDPOINT}${state.query}`)
    }, [])
    

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