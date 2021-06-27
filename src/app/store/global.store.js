import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const enhancer = [applyMiddleware(...middleware)];

const store = createStore(
  rootReducer,
  initialState,
  compose(compose(...enhancer))
);

export default store;
