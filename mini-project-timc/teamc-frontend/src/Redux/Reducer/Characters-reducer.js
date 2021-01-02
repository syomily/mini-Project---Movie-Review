import { 
    SET_LOADINGCHARACTERS,
    GET_CHARACTERS,

  } from '../Action/movie-action'
  
  // Define your state here
  const initialState = {
    loading: false,
    todos: [],
    characters: ''
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case SET_LOADINGCHARACTERS:
        return {
          ...state,
      loading: true
        }
      // Get todos
      case GET_CHARACTERS:
        return {
          ...state,
          todos: payload,
          loading: false
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }