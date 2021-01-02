import {
    SET_LOADINGCAROUSEL,
    GET_CAROUSEL,
} from '../Action/movie-action'

const initialState = {
    loading: false,
    todos: [],
    poster : '',
    title: ''
    
}

export default(state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADINGCAROUSEL:
            return {
                ...state,
                loading: true
            }
        
        case GET_CAROUSEL:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        default:
            return state
    }   
}