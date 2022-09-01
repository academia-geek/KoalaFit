import {
    applyMiddleware,
    combineReducers,
    createStore
  } from "redux";
  import {
    userReducer
  } from "../Reducers/userReducers";
import thunk from "redux-thunk";
  
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const reducers = combineReducers({
    login: userReducer
  });
  
  export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );