import { 
    SET_LOADINGREVIEW,
    GET_USERREVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW,

  } from '../Action/movie-action'
  
  // Define your state here
  const initialState = {
    loading: false,
    todos: [],
    review: ''
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case SET_LOADINGREVIEW:
        return {
          ...state,
      loading: true
        }
      // Get todos
      case GET_USERREVIEW:
        return {
          ...state,
          todos: payload,
          loading: false
        }
        // Create new todo
          case EDIT_REVIEW:
        return {
          ...state,
          todos: [payload, ...state.todos],
          loading: false
        }
        // Delete existed todo
          case DELETE_REVIEW:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== payload),
          loading: false
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }