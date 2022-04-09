const reducer = (state, action) => {

    switch(action.type){
        case "SET_STORIES":
            return {...state, stories: action.payload}
        
        case "SET_LOADING":
            return {...state, isLoading: false}

        case "REMOVE_STORY":
            const newStories = state.stories.filter(story => story.objectID !== action.payload )
            console.log(newStories);
            return{...state, stories: newStories}

        case "HANDLE_CHANGE":
            return{...state, query: action.payload}

        default:
            throw new Error(`no matching ${action.type} action`)
    }
}

export default reducer;