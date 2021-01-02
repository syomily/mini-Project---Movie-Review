import {
    SET_LOADINGCATEGORY,
    GET_CATEGORYBIOGRAPHY,
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
        
        case GET_CATEGORYBIOGRAPHY:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        default:
            return state
    }   
}