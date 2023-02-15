import { combineReducers } from "redux";
import tasksReducer from "./reducer/tasksReducer";
import tasksFilterReducer from "./reducer/tasksFilterReducer";

const rootReducer = combineReducers({
  tasksReducer: tasksReducer,
  taskFilterReducer: tasksFilterReducer,
});

export default rootReducer;
