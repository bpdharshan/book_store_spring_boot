import {SET_BOOKS, ADD_BOOKS, UPDATE_BOOKS, SET_CATEGORIES} from '../actions/BookAction';

const initialState = {
    books : [],
    categories : []
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_BOOKS:
            console.log("action.payload.data", action.payload.data)
            return {
                ...state,
                books : action.payload.data 
            }
            break;
        case SET_CATEGORIES:
            return {
                ...state,
                categories : action.payload.data 
            }
            break;
        default:
            return state;
    }
}

export default bookReducer;