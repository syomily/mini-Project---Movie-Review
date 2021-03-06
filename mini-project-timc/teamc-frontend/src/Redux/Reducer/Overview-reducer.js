import { 
	SET_LOADING,
	GET_MOVIEINFO
} from '../Action/movie-action'

// Define your state here
const initialState = {
	loading: false,
	overviews: [],
    Plot: '',
    Released: '',
    Runtime: '',
    Writer: '',
    Genre: ''

}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
	switch(type) {
		// Set loading
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		// Get todos
		case GET_MOVIEINFO:
			return {
				...state,
				overviews: payload,
				loading: false
			}
		
		// Return default state if you didn't match any case
		default:
			return state
	}
}