// import {
//     SET_LOADINGCATEGORY,
//     GET_ALLCATEGORY,
// } from '../Action/movie-action'

// const initialState = {
//     loading: false,
//     results: [],
//     poster : '',
//     title : '',
//     genre: '',
    
// }

// export default(state = initialState, {type, payload}) => {
//     switch(action.type) {
//         case SET_LOADINGCATEGORY:
//             return {
//                 ...state,
//                 loading: true
//             }
        
//         case GET_ALLCATEGORY:
//             return {
//                 ...state,
//                 results: payload,
//                 loading: false
//             }
//         default:
//             return state
//     }   
// }