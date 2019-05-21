

export const showAddReducer = (state = {selected: null, showList:[]}, action) => {
    if (action.type === 'ADD_SHOW') {
        console.log("add")
        const { payload } = action;
        return {selected:null, showList:[...state.showList, payload]};
    } 

    if (action.type === 'DELETE_SHOW'){
        console.log("delete")
        for (let i = 0; i < state.showList.length; i++){
            if (state.showList[i].showId === action.payload){
                return {selected: null, showList:[...state.showList.filter(item => item.showId !== action.payload)]};
            }
        }  
    }

    if (action.type === 'SELECT_SHOW'){
        console.log("this show has been selected");
        console.log(state);
        console.log(state.showList[action.payload]);
        return {selected: state.showList[action.payload], showList: [...state.showList]}
    }
    return state;
}