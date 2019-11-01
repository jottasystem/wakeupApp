import { combineReducers } from 'redux';
import BibleReducer from "./BibleReducer"

export default combineReducers({
    BibleInfo: BibleReducer
})