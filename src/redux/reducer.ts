import { combineReducers } from 'redux'
import tasksReducer from './reducer/tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export default rootReducer;
