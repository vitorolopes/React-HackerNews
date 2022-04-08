const reducer = (state, action) => {

    switch(action.type){
        case "SET_STORIES":
            return {...state, stories: action.payload}
        
        case "SET_LOADING":
            return {...state, isLoading: false}

        default:
            throw new Error(`no matching ${action.type} action`)
    }
}

export default reducer;