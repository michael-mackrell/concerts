

export const showAddReducer = (state = {selected: null, showList:[]}, action) => {

    if (action.type === 'GET_SHOWS'){
        console.log({
            ...state, showList: action.payload
        })
        return {
            ...state, showList: action.payload
        }; 
    }


    if (action.type === 'ADD_SHOW') {
        const { payload } = action;
        return {selected:null, showList:[...state.showList, payload]};
    } 

    if (action.type === 'DELETE_SHOW'){
        for (let i = 0; i < state.showList.length; i++){
            if (state.showList[i].showId === action.payload){
                return {selected: null, showList:[...state.showList.filter(item => item.showId !== action.payload)]};
            }
        }  
    }

    if (action.type === 'SELECT_SHOW'){
        console.log(action.payload)
        for (let i = 0; i < state.showList.length; i++){
            if (state.showList[i]._id === action.payload){
                return {selected: state.showList[i], showList: state.showList}
            }
        }  
        
    }

    if (action.type === 'UPDATE_SHOW'){
        for (let i = 0; i < state.showList.length; i++){
            if (state.showList[i].showId === action.payload.passedShowId){
                return{selected: action.payload, showList: [...state.showList.slice(0,i), action.payload, ...state.showList.slice(i + 1)]};
            }
        }  
        
    }
    return state;
}