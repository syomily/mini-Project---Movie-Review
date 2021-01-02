import {
    SET_LOADINGCATEGORY,
    GET_CATEGORYANIMATION,
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
        
        case GET_CATEGORYANIMATION:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        default:
            return state
    }   
}