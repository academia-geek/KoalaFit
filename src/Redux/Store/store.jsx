import {
    applyMiddleware,
    combineReducers,
    createStore
  } from "redux";
  import {
    userReducer
  } from "../Reducers/userReducer";
  import thunk from "redux-thunk";
  import {
    reducerNewWorkout
  } from "../Reducers/reducerNewWorkout";
  
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const reducers = combineReducers({
    login: userReducer,
    myWorkouts: reducerNewWorkout,
  });
  
  export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );