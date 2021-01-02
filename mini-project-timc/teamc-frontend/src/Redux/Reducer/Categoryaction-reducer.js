import {
    SET_LOADINGCATEGORY,
    GET_CATEGORYACTION,
} from '../Action/movie-action'

const initialState = {
    loading: false,
    todos: [],
    poster : '',
    title : '',
    genre: '',
    
}

export default(state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADINGCATEGORY:
            return {
                ...state,
                loading: true
            }
        
        case GET_CATEGORYACTION:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        default:
            return state
    }   
}