import { combineReducers } from "redux";
import tasksReducer from "./reducer/tasksReducer";
import tasksFilterReducer from "./reducer/tasksFilterReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  taskFilter: tasksFilterReducer,
});

export default rootReducer;
