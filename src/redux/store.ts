import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// @ts-ignore
import logger from "redux-logger";

const thunkMiddleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...thunkMiddleware, logger))
);
export default store;
