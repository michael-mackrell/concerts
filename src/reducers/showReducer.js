

export const showAddReducer = (state = [], action) => {
    if (action.type === 'ADD_SHOW') {
        const { payload } = action;
        return [...state, payload];

    } 

    if (action.type === 'DELETE_SHOW'){
        for (let i = 0; i < state.length; i++){
            if (state[i].showId === action.payload){
                return [...state.filter(item => item.showId !== action.payload)]
            }
        }
        
    }
    return state;
}

export const showGetReducer = (state = [], action) => {
    if (action.type === 'GET_SHOWS') {
        return state; //not needed perhaps since default returns state
    }
    return state;
}

export const deleteShowReducer = (state = [], action) => {
    console.log("we made it fam");
    if (action.type === 'DELETE_SHOW'){
        for (let i = 0; i < state.length; i++){
            if (state[i].showId === action.payload.deleteThisOne){
                console.log([state.splice(i, 1)]);
                return [state.splice(i, 1)];
            }
        }
        return
    }
}
