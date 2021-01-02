
import { combineReducers } from 'redux'
import Carousel from "../Reducer/Carousel-reducer"
import AllCategory from "../Reducer/Allcategory-reducer"
import Action from "../Reducer/Categoryaction-reducer"
import Comedy from "../Reducer/Categorycomedy-reducer"
import Drama from "../Reducer/Categorydrama-reducer"
import Animation from "../Reducer/Categoryanimation-reducer"
import Biography from "../Reducer/Categorybiography-reducer"
import Pagination from  "../Reducer/Pagination-reducer"
import Review from "../Reducer/Review-reducer"
import Character from "../Reducer/Characters-reducer"
import Movieinfo from "../Reducer/Movieinfo-reducer"
import todo from '../Reducer/todo-reducer'
import overview from '../Reducer/Overview-reducer'

export default combineReducers({
    Carousel,
    AllCategory,
    Action,
    Comedy,
    Drama,
    Animation,
    Biography,
    Pagination,
    Review,
    Character,
    Movieinfo,
    todo,
    overview
})
