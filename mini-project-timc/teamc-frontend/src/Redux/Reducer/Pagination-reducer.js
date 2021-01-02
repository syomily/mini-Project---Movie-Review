// import { combineReducers } from 'redux'


// const pages = (pages = {}, action = {}) => {
//     switch (action.type) {
//         case 'REQUEST_CATEGORY_PAGE' :
//             return {
//                 ...pages,
//                 [action.payload.page]: {
//                     ids: [],
//                     fetching: true
//                 }
//             }
//         case 'RECEIVE_CATEGORY_PAGE':
//             return {
//                 ...pages,
//                 [action.type.page]: {
//                     ids: action.payload.results.filter(result => result.id)
//                 }
//             }    
//         default:
//             return pages    
//     }
// } 

// const currentPage = (currentPage = 1, action = {}) => {
//     return action.type == 'REQUEST_CATEGORY_PAGE'? action.payload.page: currentPage
// }
  


// const results = (results = {}, action = {}) => {
//     switch (action.type) {
//         case 'RECEIVE_CATEGORY_PAGE':   
//         let_results = {}
//         for (let result of action.payload.results) {
//             _results = {
//                 ...results,
//                 [result, id]: result
//             }
//         }
//         return {
//             ...results,
//             ..._results
//         }
//         default:
//             return results
//     }
// }

// const paginations = combineReducers({
//     pages,
//     currentPage,
// })

// export default combineReducers({
//     results,
//     paginations
// })