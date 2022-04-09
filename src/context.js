import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer'

const AppContext = React.createContext();

const initialState ={
    isLoading: true, // Stories
    query: "react",  // SearchForm
    stories: [], // Stories
    page: 0, // Buttons
}

const API_ENDPOINT =   `http://hn.algolia.com/api/v1/search?query=` 

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch({type: "SET_LOADING"})//Whenever we type something
        // in the input we want a new fetch request, so we want to set
        // isLoading to true
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            dispatch({type: "SET_STORIES", payload: data.hits})
        } catch (error) {
            console.log(error);
        }

      
    }

    const removeStory = (id) => {
        dispatch({type: "REMOVE_STORY", payload: id})
    }

    const handleChange = (newQuery) => {
        dispatch({type: "HANDLE_CHANGE", payload: newQuery} )
    }

    // const handleClickIncrease = () => {
    //     dispatch({type: "HANDLE_CLICK_INC"})
    // }

    useEffect(() => {
      fetchStories(`${API_ENDPOINT}${state.query}&page=${state.page}`)
    }, [state.query, state.page])
    

    return(
        <AppContext.Provider value={
            { ...state,
              removeStory,
              handleChange,
            //   handleClickIncrease 
             } 
        }>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 