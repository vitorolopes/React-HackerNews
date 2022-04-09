const reducer = (state, action) => {

    switch(action.type){
        case "SET_STORIES":
            return {...state, 
                     stories: action.payload.stories,
                     isLoading: false,
                     nbPages: action.payload.nbPages
                    }
        
        case "SET_LOADING":
            return {...state, isLoading: true}

        case "REMOVE_STORY":
            const newStories = state.stories.filter(story => 
                           story.objectID !== action.payload )
            console.log(newStories);
            return{...state, stories: newStories}

        case "HANDLE_CHANGE":
            return{...state, query: action.payload}

        case "HANDLE_CLICK_INC":
            if(state.page === state.nbPages - 1){
                return{...state, page: 0}
            } else {
                let newPage = state.page + 1
                return{...state, page: newPage }
            }
        
        case "HANDLE_CLICK_DEC":
            if(state.page === 0){
                return {...state, page: state.nbPages - 1}
            } else {
                let newPage = state.page - 1
                return{...state, page: newPage}
            }
            
        default:
            throw new Error(`no matching ${action.type} action`)
    }
}

export default reducer;