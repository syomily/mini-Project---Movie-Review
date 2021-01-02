// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
    SET_LOADING,
    GET_MOVIEINFO
  } from '../Action/movie-action'
  
  // Import all api's
  import {
    getAllOverview
  } from '../API/movie-api'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* getOverview() {
    yield put({ type: SET_LOADING })
  
    const overviews = yield call(getAllOverview)
  
    yield put({ type: GET_MOVIEINFO, payload: overviews })
  }
  
  
  // Export the saga (todo-saga)
  export default function* overviewSaga() {
    yield takeEvery(GET_TODOS_REQUESTED, getOverview)
  }