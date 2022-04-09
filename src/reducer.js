const reducer = (state, action) => {

    switch(action.type){
        case "SET_STORIES":
            return {...state, stories: action.payload, isLoading: false}
        
        case "SET_LOADING":
            return {...state, isLoading: true}

        case "REMOVE_STORY":
            const newStories = state.stories.filter(story => story.objectID !== action.payload )
            console.log(newStories);
            return{...state, stories: newStories}

        case "HANDLE_CHANGE":
            return{...state, query: action.payload}

        // case "HANDLE_CLICK_INC":
        //     return{...state, page: state.page + 1}

        default:
            throw new Error(`no matching ${action.type} action`)
    }
}

export default reducer;